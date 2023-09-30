require('dotenv').config();
const mysql = require('mysql2');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users.model')(sequelize, Sequelize);
db.schools = require('./schools.model')(sequelize, Sequelize);
db.groups = require('./groups.model')(sequelize, Sequelize);

module.exports = db;