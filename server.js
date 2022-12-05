//Server file
const express = require('express')
const app = express()
//const morgan = require('morgan');
//const db = require('bettersqllite3');

const port = 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//const accesslog = fs.createWriteStream(logdir+'access.log', { flags: 'a' });

//app.use(morgan('', { stream: accesslog }));
//app.use(db);

app.get('/', (req, res, next) => {
  res.send("Hello world");
})

app.post('/app/'. (req, res, next) => {
  200 OK
})

app.post('/app/roll/', (req, res, next) => {
  console.log("pain")
})

app.post('/app/roll/:sides/', (req, res, next) => {

})

app.post('/app/roll/:sides/:dice/', (req, res, next) => {

})

app.post('/app/roll/:sides/:dice/:rolls', (req, res, next) => {

})
app.listen(port, () => {
  console.log("Server listening on port " + port)
})



