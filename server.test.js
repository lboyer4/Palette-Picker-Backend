// import request from 'supertest'
// import app from './app'

// const environment = process.env.NODE_ENV || 'test'
// const configuration = require('./knexfile')[environment]
// const database = require('knex')(configuration)

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
	