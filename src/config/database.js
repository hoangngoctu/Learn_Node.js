require('dotenv').config()
const mySQL = require('mysql2'); //comon.js

const connection = mySQL.createConnection({
  host:process.env.DB_HOST, // default localhost
  port:process.env.DB_PORT, // default 3306
  user:process.env.DB_USER, //default: root
  password:process.env.DB_PASSWORD, //default: 123456
  database:process.env.DB_NAME, //default: hoidanit
});

module.exports = connection; // xuất kết nối ra ngoài để sử dụng ở các file khác
