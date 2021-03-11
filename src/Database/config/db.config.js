require('dotenv').config();

const {
  DB_DIALECT, DEV_DATABASE_URL, DATABASE_URL, TEST_DATABASE_URL,
} = process.env;
module.exports = {
  development: {
    url: DEV_DATABASE_URL,
    dialect: DB_DIALECT,
    logging: false,
  },
  test: {
    url: TEST_DATABASE_URL,
    dialect: DB_DIALECT,
    logging: false,
  },
  production: {
    url: DATABASE_URL,
    dialect: DB_DIALECT,
    use_env_variable: DATABASE_URL,
    logging: false,
    ssl: true,
  },
};
