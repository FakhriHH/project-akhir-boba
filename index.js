const mysql      = require('mysql');
const express = require('express');
const cors = require('cors');
global.app = express()

global.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bacod_cofeshop'
  });

app.use(cors());
app.use(express.json());
connection.connect();

require("./module/menu.js")

app.listen(3000)
