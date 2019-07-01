
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
    .catch(error => console.log(`Error seed data: ${error}`));
};
