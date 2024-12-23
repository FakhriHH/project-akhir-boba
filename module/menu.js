app.get('/menu', async (req, res) => {
    const results = await knex('menu').select();
    res.json(results);
});

app.post('/menu', async (req, res) => {
    const data = req.body

    const results = await knex('menu').insert({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
    })
    res.json(results)
});

app.delete("/menu/:id", async (req, res) => {
    const primaryKey = req.params.id
    
    const results = await knex("menu").where("id", primaryKey).del();
    res.json(results)
});
  
app.put("/menu/:id", async (req, res) => {
    const primaryKey = req.params.id
    const data = req.body
    
    const results = await knex("menu").where("id", primaryKey).update({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
    });
    res.json(results)
});