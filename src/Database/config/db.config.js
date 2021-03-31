require('dotenv').config();

const {
  DB_DIALECT, DEV_DATABASE_URL, BUILD_DATABASE_URL, TEST_DATABASE_URL,
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
    url: BUILD_DATABASE_URL,
    dialect: DB_DIALECT,
    use_env_variable: BUILD_DATABASE_URL,
    logging: false,
    ssl: true,
  },
};
