// require('./controllers/random-pastrami.js')(app)

const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.json(["Hello", "World"])
})

app.listen(port, () => console.log(`Listening at port ${port}`) )
