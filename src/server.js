'use strict';
console.log('server.js');

// importuojam express
const express = require('express');
const cors = require('cors');
const { fakeName } = require('./modules/cas');
// sukuriam back end aplikacija/serveri
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Routes

// app[method]([endpiont/url], functionToHandle)
app.get('/', (request, response) => {
  response.send('<h1>Hello express framework</h1>');
});

app.get('/time', (request, response) => {
  response.status(200).send(`<h1>${new Date().toLocaleTimeString()}</h1>`);
});

// about
app.get('/about', (request, response) => {
  response.send('<h1>about page</h1>');
});

// GET /api/users
//const users =  iskelti i data.js
const users = [
  {
    id: 1,
    name: 'James',
    town: 'London',
  },
  {
    id: 2,
    name: 'Jill',
    town: 'Kaunas',
  },
];

app.get('/api/users', (request, response) => {
  response.json(users);
});
app.get('/api/users/1', (request, response) => {
  response.json(users[0]);
});
app.get('/api/users/2', (request, response) => {
  response.json(users[1]);
});

// GET /api/fake-user - grazinti random sugeneruota user su casual
app.get('/api/fake-user', (request, response) => {
  response.json({ user: fakeName() });
});

// GET /api/colors - grazina masyva su keturiom spalvom is casual
// Fronte parisiusti spalvas ir sukurti 4 dezutes 100 x 100 px su tu spalvu fonu

// 404 page
app.use((req, res, next) => {
  res.status(404).json({ msg: "Sorry can't find that!" });
});
// paleidiziam serveri
app.listen(PORT, () => console.log('server is running on port ' + PORT));
