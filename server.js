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
  res.json('404 NOT FOUND');
})

app.post('/roll/', (req, res, next) => {
  console.log("pain")
})

app.post('/roll/:sides/', (req, res, next) => {

})

app.listen(port, () => {
  console.log("Server listening on port " + port)
})



