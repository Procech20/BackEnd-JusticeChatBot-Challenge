import ('@babel/polyfill');
const dotenv = require('dotenv');



dotenv.config();
const { DB_HOST, DB_URL, DB_USER, DB_KEY, DB_DIALECT, DEV_DATABASE_URL, TEST_DATABASE_URL, DATABASE_URL } = process.env;
module.exports = {
  development: {
    url: DEV_DATABASE_URL,
    dialect: 'mysql',
    logging: false
  },
  test: {
    url: TEST_DATABASE_URL,
    dialect: 'mysql',
    logging: false
  },
  production: {
    url: DATABASE_URL,
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
    logging: false,
    ssl: true
  },
};


