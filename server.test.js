const server = require('./server');
const request = require('supertest');

const environment = process.env.NODE_ENV || 'test'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {
	it('should have', () => {

	})
})

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

describe('GET /api/v1/palettes', () {
	it('should return all palettes', () => {
		//set up 
		// it should declare expectedPalettes with the palettes database

		//execution
		//should declare the response with palettes
		//all the palettes with be the response body

		//expectation
		//expected palettes to equal expectedPalettes
	})
})

describe('GET /api/v1/palettes:id', () {
	it('should return a palette with an id that matches the params id', () => {
		//set up 
		// it should grab the first palette from the database
		//the id should = the palette id

		//execution
		//should declare the palettes 
		//declare result should take the first palette from the response body

		//expectation
		//expected the result to be the palette with th matching id of the palette 
	});
});

describe('POST /api/v1/palettes', () {
	it('should post a palette to the palettes database', () {
		//setup
		//it should declare the palette

		//execution 
		//result should be declared with the palette posted
		//palettes should be declared as all the palettes in the database

		//expected 
		//a 200 reponse
		//the palette color to be the same as the new palette
	});

		it('should return an error if a not all required parameters are met', () {
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
	