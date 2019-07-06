const app = require('./server');
const request = require('supertest');

const environment = process.env.NODE_ENV || 'test'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {

	beforeEach(async () => {
		await database.seed.run()
	})

	it('should have', () => {
		console.log('hello')
	});


//GET /project:

//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

//500 status code: it should return 500 status if there is an internal server error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 500

//create describe block for GET /project, should return every project in the DB, async
	//setup: create variable for expectedProject and assign to await the database of project that is selected
	//execution: create variable for response that awaits the request from app to get the project DB, create variable of project assigned to response.body
	//expectation: expect project response.body to equal expectedProject

	//GET /project/:id:

	//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

	//404 status code: it should return 404 status, async, create variable of response and await the request from app to get the project DB with project id that is not found, expect response.status to be 404

	//500 status code: it should return 500 status if there is an internal server error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 500

	//create describe block for GET /project/:id, should return a single project, async
		//setup: create variable of expectedProject assign to await the project DB and grab the first one .first(), create variable for id and assign to expectedProject.id
		//execution: create var. for response and await request(app).get(`/project/${id}`), create var. for project and assign to response body
		//expectation: expect project to equal the expectedProject

			//POST /project:

	//422 status code: it should return 422 status if there is an unprocessable entity error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 422

	//create describe block for POST /project, it should post a new project to the DB, async
		//setup: create var. newProject assign to {name: "Project 500"}
		//execution: create var. of response and assign to await request(app).post('/project).send(newProject), create var. of the response body id, create var. of project and await the project DB where the ids match and grab the first one .first()
		//expectation: expect newProject.name  to equal project.name

		//PUT /project/:id:

	//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

	//404 status code: it should return 404 status, async, create variable of response and await the request from app to get the project DB with project id that is not found, expect response.status to be 404

	//create describe block for /project/:id, it should update the current project with new info provided by user, async
		//setup: create var. updatedProject assign to await project DB and grab the first one .first(), create id var. and assign to updatedProject.id
		//execution: create response and assign to await the request(app).put(`/project/${id}`).send(updatedProject), create project var. and assign to await the project DB.where({ id: id }).first()
		//expectation: expect updatedProject to equal project

	//DELETE /project/:id:

	//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

	//404 status code: it should return 404 status, async, create variable of response and await the request from app to get the project DB with project id that is not found, expect response.status to be 404

	//500 status code: it should return 500 status if there is an internal server error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 500

	//describe DELETE /project/:id, it should delete the project from DB, async
	//setup: create var. of project and assign to await project DB and grab the first one .first(), create var. for id and assign to project.id
	//execution: create var. for response and assign to await request(app).delete(`/project/${id}`), create var for deletedProject and assign to await project DB where({ id: id }).first()
	//expectation: expect the deletedProject to equal undefined (because it was deleted)

	describe('GET /api/v1/palettes', () => {
		it('should return all palettes', async () => {
			const expectedPalettes = await database('palettes').select();

			expectedPalettes.forEach(palette => {
				palette.created_at = palette.created_at.toJSON();
				palette.updated_at = palette.updated_at.toJSON();
			});
			const res = await request(app).get('/api/v1/palettes');
	 		const palettes = res.body;

			expect(palettes).toEqual(expectedPalettes);
	 	});
	});

	describe('GET /api/v1/palettes:id', () => {
		it('should return a palette with an id that matches the params id', async () => {
			const expectedPalette = await database('palettes').first();
			expectedPalette.created_at = expectedPalette.created_at.toJSON();
			expectedPalette.updated_at = expectedPalette.updated_at.toJSON();

			const id = expectedPalette.id;
			const res = await request(app).get(`/api/v1/palettes/${id}`);
			const palette = res.body[0];

			expect(palette).toEqual(expectedPalette);
		});
	});

	describe('POST /api/v1/palettes', () => {
		it('should post a palette to the palettes database', async () => {
			//setup
			const newPalette = {"color_1": "FFFFFF", "color_2": "FFFFFF", "color_3": "888888", "color_4": "000000", "color_5": "00FFFF"}

			const response = await request(app).post('/api/v1/palettes').send(newPalette)
			const id = response.body.id;
			const palette = await database('palettes').where({ id }).first();
			
			expect(palette.color_1).toEqual(newPalette.color_1);
			expect(response.status).toEqual(201);
		});

			it('should return an error if a not all required parameters are met', () => {
			//setup
			//it should declare the palette

			//execution 
			//result should be declared with the palette posted
			//palettes should be declared as all the palettes in the database

			//expected 
			//an error status 
			//a error message
			//error: 
	    //      `Expected format: { name: <String> } You're missing "${ requiredParameter }" property.
		});
	});

	describe('PUT /api/v1/palettes/:id', () => {
		it('should return a 200 status if request has a matching id', () => {
			//setup
			//it should declare the id of the request
			//should declare the body of the request as updated palette

			//execution 
			//should search in the database for a palette with the matching id of the request and update that palette

			//expected 
			//a 200 status
		});

			it('should return a 404 status if request has no matching id', () => {
			//setup
			//it should declare the id of the request
			//should declare the body of the request as updated palette

			//execution 
			//should search the database for a matching id

			//expected 
			//a 404 status will be returned with an error message
		});
	});

	describe('DELETE /api/v1/palettes/:id', () => {
		it('should return a 200 status with a deleted message', () => {
			//setup
			//it should declare the id of the request

			//execution 
			//should search the database for a matching id

			//expected 
			//a 200 status will be returned with a message telling you which palette was deleted
		});

			it('should return a 404 status with an error message', () => {
			//setup
			//it should declare the id of the request

			//execution 
			//should search the database for a matching id

			//expected 
			//a 404 status will be returned with an error message
		});
	});
});
	