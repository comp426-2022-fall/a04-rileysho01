//Server file
import express from 'express';
import minimist from 'minimist';

//const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const args = minimist(process.argv.slice(2));


var port = 5000;
if(args.port) {
  port = args.port;
}


app.listen(port, () => {
  console.log("Server listening on port " + port)
})

app.get('/', (req, res, next) => {
  res.send("404 NOT FOUND");
})

app.post('/app/', (req, res, next) => {
  res.send("200 OK");
})

app.post('/app/roll/', (req, res, next) => {
  console.log("pain");
})

app.post('/app/roll/:sides/', (req, res, next) => {
  console.log("app roll sides");
})

app.post('/app/roll/:sides/:dice/', (req, res, next) => {
  console.log("app roll sides dice");
})

app.post('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
  console.log("app roll sides dice rolls");
})



