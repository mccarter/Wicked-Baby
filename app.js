var mysql = require('mysql'); //maybe not required? don't know...
var Sequelize = require('sequelize');
var exports = module.exports = {};
var keys = require('./config.js');

//initializes Sequelize with mysql database, listens to port 3306
var db = new Sequelize('thumbs', 'root', keys.mysqlPassword, {
      dialect: "mysql",
      port:    3306, 
    })

db
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.');
      //defines a Student model
      exports.Student = exports.db.define('Student', {
        username: Sequelize.STRING,
        password: Sequelize.STRING
      })
      exports.Student.sync();
    }
  })

exports.db = db;
