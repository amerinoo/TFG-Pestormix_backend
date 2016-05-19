var Sequelize = require('sequelize');
var sequelize;

sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});


var db = {};

db.todo = sequelize.import(__dirname + '/models/cocktail.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;