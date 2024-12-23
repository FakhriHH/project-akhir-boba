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

app.put("/menu/:id", (req, res) => {
  const primaryKey = req.params.id
  const data = req.body

  connection.query(`UPDATE menu SET name = '${data.name}', description = '${data.description}', price = '${data.price}', stock = '${data.stock}' where id = '${primaryKey}'`, (error, results, fields) => {
    res.json(results)
  });
})
