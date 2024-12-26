const express = require('express');
const cors = require('cors');
global.app = express()

global.knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    port: 3306,
    user     : 'root',
    password : '',
    database : 'bacod_cofeshop'
  },
});

app.use(cors());
app.use(express.json());

require("./module/menu")
require("./module/transactions")

app.listen(3000)
