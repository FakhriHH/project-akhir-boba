const mysql      = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express()

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bacod_cofeshop'
  });

app.use(cors());
app.use(express.json());
connection.connect();

app.get('/menu', function (req, res) {
    connection.query('SELECT * FROM menu', function (error, results, fields) {
        res.json(results)
    });
});

app.post('/menu', (req, res) => {
  const data = req.body

  connection.query(`INSERT INTO menu (name, description, price, stock) VALUES ('${data.name}', '${data.description}', '${data.price}', '${data.stock}')`, (error, results, fields) => {
    res.json(results)
  });
});

app.delete("/menu/:id", (req, res) => {
  const primaryKey = req.params.id
  
  connection.query(`DELETE FROM menu WHERE id = '${primaryKey}'`, (error, results, fields) => {
    res.json(results)
  });
});

app.listen(3000)
