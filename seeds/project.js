const createPalette = (knex, project) => {
  return knex('project').insert(project)
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
return knex('palettes').del()
  .then(() => knex('project').del())
    .then(() => {
      let projectPromises = [];

      projectData.forEach(project => {
        projectPromises.push(createProject(knex, project))
      });

      return Promise.all(projectPromises);
    })
    .catch(error => console.log(`Error seeding data: ${ error }`));
};

const createProject = (knex, project) => {
  return knex('project').insert({
    color: project.color
  }, 'id')
  .then(projectId => {
    let palettePromises = [];

    project.palettes.forEach(palette => {
      palettePromises.push(
        createPalette(knex, {
          color: palette,
          project_id: projectId[0]
        })
      )
    });

    return Promise.all(palettePromises)
  })
};
