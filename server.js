const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

// require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => console.log(`App is running 😃 on port ${app.get('port')}`));

// app.locals.projects = [
//   {
//     name: 'Sally'
//   },
//   {
//     name: 'Lauren'
//   }
// ]

//get for all projects and all palettes:

app.get('/', (request,response) => {
  database('project').select()
  .then(project => {
    return response.status(200).json(project);
  })
  .catch(error => {
    return response.status(500).json({ error });
  })
});


//get for single projects /project/:id
//get for all palettes /palettes
//get for single palette /palettes/:id

//post project
//post palette

//change a palette
//change a project

//delete a palette
//delete a project