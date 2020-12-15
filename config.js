require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS
})


// Feel free to add your own settings,
// e.g. DB connection settings
module.exports = {
  port: process.env.PORT || 5000,
  connection,
};
