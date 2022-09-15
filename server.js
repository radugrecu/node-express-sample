const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

const app = express();
const port = process.env.APP_PORT || 3000;

morgan.tiny

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('combined'))

app.get('/status', (req, res) => {
  res.send(`The app is listening on port ${port}`);
});

app.get('/echo/:getParam', (req, res) => {
  const getParam = req.params.getParam;

  let result = {
    "input": getParam
  }

  res.json(result);
});

app.get('/echoreq', (req, res) => {
  const getParam = req.params;

  let result = {
    "input": getParam
  }

  res.json(result);
});


app.listen(port, () => console.log(`The app is now listening for requests on port ${port}!`))
