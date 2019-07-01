
exports.up = function(knex) {
	return Promise.all([
		knex.schema.createTable('project', function(table) {
			table.increments('id').primary();
			table.string('name');

			table.timestamps(true, true);
		}),

		knex.schema.createTable('palettes', function(table) {
			table.increments('id').primary();
			table.string('color');
			table.integer('project_id').unsigned()
			table.foreign('project_id')
				.references('project');

			table.timestamps(true, true);
		})
	])
};

exports.down = function(knex) {
  return Promise.all([
  	knex.schema.dropTable('palettes'),
  	knex.schema.dropTable('projects')
  ]);
};
