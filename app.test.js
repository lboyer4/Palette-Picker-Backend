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

			expect(response.status).toBe(200);
			expect(result).toEqual(expectedProject);
    });
	});

	//GET /project/:id:

		describe('GET /api/v1/project/:id', () => {
			it('should return a single project with the id in the params', async () => {
			const expectedProject = await database('project').first();
			const id = expectedProject.id;

			const response = await request(app).get(`/api/v1/project/${id}`);
			const result = response.body[0];
			
			expect(response.status).toBe(200);
			expect(result.name).toEqual(expectedProject.name);
		});

		it('should respond with an error if there was no project with id that matches the request', async () => {
			const expected = {
				error: 'Couldn\'t find project with id: 999'
			};

			const response = await request(app).get('/api/v1/project/999');
			const result = response.body;

			expect(result).toEqual(expected);
			expect(response.status).toBe(404);
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

			expect(response.status).toBe(201);
			expect(newProject.name).toEqual(project.name)
		});

		it('should reject post if required parameter is invalid or not recieved', async () => {
			const expectedError = {
				error: `Expected format: { name: <String> } You're missing \"name\" property.`
			};

			const responseInvalidParam = await request(app).post('/api/v1/project');

			expect(responseInvalidParam.status).toBe(422);
			expect(responseInvalidParam.body).toEqual(expectedError);
		});
	})

	//PUT /project/:id:

	describe('PUT /api/v1/project/:id', () => {
		it('should update the current project with new information', async () => {
			let updatedProject = await database('project').first()
			const id = updatedProject.id

			const response = await request(app).put(`/api/v1/project/${id}`).send(updatedProject)
			const project = await database('project').where({ id: id }).first();

			expect(response.status).toBe(200);
			expect(updatedProject).toEqual(project);
		})

		it('should respond with an error if project does not exist', async () => {
			const updatedName = {name: 'akjehkqwhr'}
			const error = {
				error: 'Couldn\'t update: Project does not exist'
			}

			const response = await request(app).put('/api/v1/project/-1').send(updatedName);

			expect(response.status).toBe(404);
			expect(response.body).toEqual(error);
		});
	})
	
	//DELETE /project/:id:
	
	describe('DELETE /api/v1/project/:id', () => {
		it('should delete a project using the id', async () => {
			const project = await database('project').first();
			const projectToDelete = project.id
			
			const response = await request(app).delete(`/api/v1/project/${projectToDelete}`);
			const deleted = await database('project').where({ id: projectToDelete })

			expect(response.status).toBe(200);
			expect(deleted).toEqual([])
		});

		it('should respond with an error if id doesn\'t exist in the project database', async () => {
			const expectedError = "{\"error\":\"Could not find project with id: 888\"}";

			const response = await request(app).delete('/api/v1/project/888');

			expect(response.status).toBe(404);
			expect(response.text).toBe(expectedError);
		});
	})
});