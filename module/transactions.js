app.post("/transactions", async (req, res) => {
    const data = req.body
    const menuDariFrontend = data.menu
  
    let todayDate = new Date()
    let generateId = todayDate.getTime()
  
    const insertTransaction = await knex('transactions').insert({
      id: generateId,
      buyer: data.buyer,
      cashier: data.cashier
    })
  
    const insertTransactionMenu = await knex('transaction_menu').insert(
      menuDariFrontend.map((menu) => ({
        transaction_id: generateId,
        menu_id: menu.id,
        quantity: menu.quantity
      }))
    )
  
    res.json(insertTransaction)
  });