// require('./controllers/random-pastrami.js')(app)

const express = require('express')
const app = express()
const port = 4000
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Database
require('./data/review-db')

// Controllers
require('./controllers/pastrami/pastrami-random.js')(app)
require('./controllers/pastrami/pastrami-search.js')(app)
require('./controllers/reviews/reviews.js')(app)

app.get('/', (req, res) => {
  res.json("Welcome to the Rate My Pastrami API :D")
})

app.listen(port, () => console.log(`Listening at port ${port}`) )
