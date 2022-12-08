//Server file
import express from 'express';
import minimist from 'minimist';
//import { roll } from '../lib/a03/lib/roll.js';

//const express = require('express');
const app = express();

const args = minimist(process.argv.slice(2));

var port = 5000;
if(args.port) {
  port = args.port;
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res, next) => {
  res.send("404 NOT FOUND");
})

app.get('/app/', (req, res, next) => {
  res.send("200 OK");
})

app.get('/app/nope/', (req, res, next) => {
  res.send("200 OK");
})

app.get('/app/roll/', (req, res, next) => {
  const out = res.status(200).json(roll(2));
  res.send(out);
})

app.get('/app/roll/:sides/', (req, res, next) => {
  const out = res.status(200).json("?sides=20&dice=4&rolls=3");
  res.send(out);
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
  const out = res.status(200).json(roll(req.roll));
  res.send(out);
})

app.get('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
  const out = res.status(200).json(roll(req.roll, req.sides));
  res.send(out);
})

app.listen(port, () => {
  res.send("Server listening on port " + port)
})

