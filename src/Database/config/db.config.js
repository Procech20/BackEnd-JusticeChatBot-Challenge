module.exports = {
  HOST: "localhost",
  USER: "Pro",
  PASSWORD: "Pro@2k21",
  DB: "justice chatbot backend",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};