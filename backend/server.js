
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.redirect('http://localhost:3000')
})

app.listen(process.env.PORT || 3030, function () {
  console.log('Backend running')
})