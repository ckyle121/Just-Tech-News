// import Sequelize constructor from the library 
const Sequelize = require('sequelize');

// import dotenv for password security 
require('dotenv').config();

// create connection to our databse, pass in MySql info for username/password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;