const projectData = require('../data');

const createPalette = (knex, palette) => {
  return knex('palettes').insert(palette)
};

exports.seed = function(knex) {
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
    name: project.name
  }, 'id')
  .then(projectId => {
    let palettePromises = [];

    project.palettes.forEach(palette => {
      const {color_1, color_2, color_3, color_4, color_5} = palette;
      palettePromises.push(
        createPalette(knex, {
          color_1,
          color_2,
          color_3,
          color_4,
          color_5,
          project_id: projectId[0]
        })
      )
    });

    return Promise.all(palettePromises)
  })
};
