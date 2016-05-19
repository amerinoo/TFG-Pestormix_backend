var Sequelize = require('sequelize');
var sequelize;

sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});


var db = {};

db.cocktail = sequelize.import(__dirname + '/models/cocktail.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;