const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd){
  options.ssl = {
    rejectUnauthorized: false
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

// const sequelize = new Sequelize(config.dbUrl, {
//   dialect: 'postgres',
//   // dialect: 'mysql',
//   logging: false,
//   ssl: {
//     rejectUnauthorized: false
//   }
// }); // Se crea una instancia de Sequelize, ya gestiona el pooling.

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
