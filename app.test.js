const app = require('./app');
const request = require('supertest');
const bodyParser = require("body-parser")

const environment = process.env.NODE_ENV || 'test'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {
	const convertDate = data => {
		return data.map(pro => {
			pro.updated_at = pro.updated_at.toJSON();
			pro.created_at = pro.created_at.toJSON();
			return pro;
		});
	}

	beforeEach(async () => {
		await database.seed.run()
	});
	describe('init', () => {
		it('should return a 200 status', async () => {
			const response = await request(app).get('/')
			expect(response.status).toBe(200)
		})
	})

	//GET /project:

	describe('GET /api/v1/project', () => {
		it('should return all projects in the db project table if they exist', async () => {
			const expectedProject = await database('project').select().then(proj => convertDate(proj));

			const response = await request(app).get('/api/v1/project');
			const result = response.body;

			expect(result).toEqual(expectedProject);
    });
	});

	//GET /project/:id:

		describe('GET /api/v1/project/:id', () => {
			it.skip('should return a single project with the id in the params', async () => {
			const expectedProject = await database('project').first();
			const id = expectedProject.id;

			const response = await request(app).get(`/api/v1/project/${id}`);
			const result = response.body;

			expect(result.name).toEqual(expectedProject.name);
		});

		it('should respond with an error if there was no project with id that matches the request', async () => {
			const response = await request(app).get('/api/v1/project/999');
			const result = response.body;

			const expected = {
				error: 'Couldn\'t find project with id: 999'
			};
			expect(result).toEqual(expected);
			expect(response.status).toBe(404);
		});
	});
});

	//POST /project:

	describe('POST /api/v1/project/', () => {
		it('should post a new project to the DB', async () => {

			const newProject = {
					"name": "project 11111"
			}
			const response = await request(app).post('/api/v1/project').send(newProject)
			const id = response.body.id
			const project = await database('project').where('id', id).first()
			expect(newProject.name).toEqual(project.name)
		})
	})

	//PUT /project/:id:



	

	//DELETE /project/:id:

	//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

	//404 status code: it should return 404 status, async, create variable of response and await the request from app to get the project DB with project id that is not found, expect response.status to be 404

	//500 status code: it should return 500 status if there is an internal server error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 500

	//describe DELETE /project/:id, it should delete the project from DB, async
	//setup: create var. of project and assign to await project DB and grab the first one .first(), create var. for id and assign to project.id
	//execution: create var. for response and assign to await request(app).delete(`/project/${id}`), create var for deletedProject and assign to await project DB where({ id: id }).first()
	//expectation: expect the deletedProject to equal undefined (because it was deleted)