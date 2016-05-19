var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Coktails API Root');
});

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Express listening on port ' + PORT + '!');
    });
});
var pg = require('pg');

// get all todos
app.get('/db', function(req, res) {
    db.cocktail.findAll({}).then(function(todos) {
        res.json(todos);
    });
});