var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
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

// get a cocktail/ all cocktails
app.get('/cocktails', function (req, res) {
    var query = req.query;
    var where = {};

    if (query.hasOwnProperty('name') && query.hasOwnProperty('userId')) {
        where.name = query.name;
        where.userId = query.userId;
    }


    db.cocktail.findAll({where: where}).then(function (todos) {
        res.json(todos);
    });
});

// POST /cocktails
app.post('/cocktails', function (req, res) {
    console.log(req.body);
    var body = _.pick(req.body, 'name', 'userId', 'description', 'alcohol', 'drinks');

    db.cocktail.create(body).then(function (cocktail) {
        res.json(cocktail.toJSON());
    }, function (e) {
        res.status(400).json(e);
    });
});

