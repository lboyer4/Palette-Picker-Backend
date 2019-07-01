const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

// app.use(express.json());
// require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3001);

// const express = require('express');

// app.use(express.json());

// app.listen(process.env.PORT || port, () => {
//   console.log(`App is running 😃 on ${port}`)
// });

app.listen(app.get('port'), () => console.log(`App is running 😃 on port ${app.get('port')}`));


//get for all projects
//get for single projects
//get for all palettes
//get for single palette

//post project
//post palette

//change a palette
//change a project

//delete a palette
//delete a project