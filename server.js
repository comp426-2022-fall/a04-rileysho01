//Server file
import express from 'express';
import minimist from 'minimist';
//import { roll } from '../lib/a03/lib/roll.js';

//const express = require('express');
const app = express();

const args = minimist(process.argv.slice(2));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


var port = 5000;
if(args.port) {
  port = args.port;
}


app.listen(port, () => {
  console.log("Server listening on port " + port)
})

app.get('/', (req, res, next) => {
  console.log("404 NOT FOUND");
})

app.post('/app/', (req, res, next) => {
  console.log("200 OK");
})

app.get('/app/roll/', (req, res, next) => {
  res.status(200).json(roll(req.roll));
});

app.get('/app/roll/:sides/', (req, res, next) => {
  console.log("app roll sides");
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
  console.log("app roll sides dice");
})

app.get('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
  console.log("app roll sides dice rolls");
})



