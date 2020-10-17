// Importing dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Starting express library
const server = express();
server
//Using body do req
.use(express.urlencoded({extended: true}))
// Using static files
.use(express.static('public'))

//Configuring template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Creating a route
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Turning server ON
server.listen(5500)