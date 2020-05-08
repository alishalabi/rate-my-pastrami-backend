// require('./controllers/random-pastrami.js')(app)

const express = require('express')
const app = express()
const port = 8000

// Controllers
require('./controllers/random-pastrami.js')(app)

app.get('/', (req, res) => {
  res.json("Welcome to the Rate My Pastrami server :D")
})

app.listen(port, () => console.log(`Listening at port ${port}`) )
