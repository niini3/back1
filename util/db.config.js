const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  },
  define: {
    timestamps: false
}
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//import model
db.web1 = require('../model/web1.js')(sequelize, Sequelize); // table
db.web2 = require('../model/web2.js')(sequelize, Sequelize);
db.credit_document_set_2013 = require('../model/credit_document_set_2013.js')(sequelize, Sequelize);
db.app_service_list = require('../model/app_service_list.js')(sequelize, Sequelize);

module.exports = db;