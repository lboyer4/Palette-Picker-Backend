const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

// require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.locals.projects = [
  {
    name: 'Sally'
  },
  {
    name: 'Lauren'
  }
]

// app.use(express.json());

// app.listen(process.env.PORT || port, () => {
//   console.log(`App is running 😃 on ${port}`)
// });

app.listen(app.get('port'), () => console.log(`App is running 😃 on port ${app.get('port')}`));

// POST and GET for 'project':

app.get('/', (request, response) => {
  response.status(200).json(app.locals.projects);
})

// app.post('/', (request, response) => {
//   response.status(200).json(app.locals.projects)
// })


//get for all projects 
//get for single projects /project/:id
//get for all palettes /palettes
//get for single palette /palettes/:id

//post project
//post palette

//change a palette
//change a project

//delete a palette
//delete a project