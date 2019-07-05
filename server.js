const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.use(express.json());
// require('dotenv').config();

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => console.log(`App is running 😃 on port ${app.get('port')}`));

app.get('/', function(req, res) {
  res.status(200).json('hello')
});

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
      return response.status(200).json(project);
    } else {
      return response.status(404).json({ error: `Couldn't find project with id: ${request.params.id}` });
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
      return response.status(200).json(palette);
    } else {
      return response.status(404).json({ error: `Couldn't find palette with id: ${request.params.id }`});
    }
  })
  .catch(error => {
    return response.status(500).json({ error });
  })
});

//post endpoint for project table

app.post('/api/v1/project', (request, response) => {
  const project = request.body;
  for (let requiredParameter of ['name']) {
    if (!project[requiredParameter]) {
      return response
        .status(422)
        .send({ error: 
          `Expected format: { name: <String> } You're missing "${requiredParameter}" property.` 
        });
    }
  }

  database('project').insert(project, 'id')
    .then(project => {
      response.status(201).json({ id: project[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

//post endpoint for palettes table 

app.post('/api/v1/palettes', (request, response) => {
  let palette = request.body
  for (let requiredParameter of ['color_1', 'color_2', 'color_3', 'color_4', 'color_5']) {
    if (!palette[requiredParameter]) {
      return response
        .status(422)
        .send({ error: 
          `Expected format: { name: <String> } You're missing "${ requiredParameter }" property.` 
        });
    }
  }

  database('palettes').insert(palette, 'id')
    .then(palette => {
      response.status(201).json({ id: palette[0] })
    })
    .catch(error => {
      response.status(500).json({ error })
    });
});

//put endpoint for changing project

app.put('/api/v1/project/:id', (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  database('project')
  .where({ id })
  .update({ name }, ['id'])
  .then((id) => {
    if (!id.length) {
      response.status(404).json({ 
        error: 'Couldn\'t update: Project does not exist' 
      });
    } else response.sendStatus(200);
  })
  .catch(error => response.status(500).json({ error }))  
})

//put endpoint for changing palette

app.put('/api/v1/palettes/:id', (request, response) => {
  const { id } = request.params;
  const updatedPalette = request.body;

  database('palettes')
  .where({ id })
  .update({ ...updatedPalette }, ['id'])
  .then((id) => {
    if (!id.length) {
      response.status(404).json({ 
        error: 'Couldn\'t update: Palette does not exist' 
      });
    } else response.sendStatus(200);
  })
  .catch(error => response.status(500).json({ error }))  
})

//DELETE a palette

app.delete('/api/v1/palettes/:id', (request, response) => {
  database('palettes').where('id', request.params.id).del()
    .then(result => {
      if (result > 0) {
        response.status(200).json(`Deleted palette ${request.body.palettes} with id ${request.params.id}`)
      } else {
        response.status(404).json({
          error: `Could not find palette with id: ${request.params.id}`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    });
 });

 //DELETE a project

app.delete('/api/v1/project/:id', (request, response) => {
  database('project').where('id', request.params.id).del()
    .then(result => {
      if (result > 0) {
        response.status(200).json(`Deleted project ${request.body.project} with id ${request.params.id}`)
      } else {
        response.status(404).json({
          error: `Could not find project with id: ${request.params.id}`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    });
 });


