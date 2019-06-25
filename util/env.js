const env = {
   database: 'app_check_list',
    // database: 'idociapps',
    username: 'db_reader',
    password: 'password',
    host: '10.100.10.249',
    port: '3308',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;