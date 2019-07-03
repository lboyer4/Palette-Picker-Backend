const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// app.use(express.json());
// require('dotenv').config();

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => console.log(`App is running 😃 on port ${app.get('port')}`));

//get endpoint for ALL resources on project table

app.get('/api/v1/project', (request, response) => {
  database('project').select()
  .then(project => {
    return response.status(200).json(project);
  })
  .catch(error => {
    return response.status(500).json({ error });
  })
});

//get endpoint for ALL resources on palettes table

app.get('/api/v1/palettes', (request, response) => {
  database('palettes').select()
  .then(palette => {
    return response.status(200).json(palette);
  })
  .catch(error => {
    return response.status(500).json({ error })
  })
});

//get for single projects /project/:id

app.get('/api/v1/project/:id', (request, response) => {
  database('project').where('id', request.params.id)
  .select()
  .then(project => {
    if(project.length) {
      return response.status(200).json(project)
    } else {
      return response.status(404).json({ error: `Couldn't find project with id: ${request.params.id}` })
    }
  })
  .catch(error => {
    return response.status(500).json({ error });
  })
});

//get for single palette /palettes/:id

app.get('/api/v1/palettes/:id', (request, response) => {
  database('palettes').where('id', request.params.id).select()
  .then(palette => {
    if(palette.length) {
      return response.status(200).json(palette)
    } else {
      return response.status(404).json({ error: `Couldn't find palette with id: ${request.params.id }`})
    }
  })
  .catch(error => {
    return response.status(500).json({ error });
  })
});

//post project
//post palette

//change a palette
//change a project

//delete a palette
//delete a project