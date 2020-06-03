const Review = require('../../models/review')

module.exports = app => {
  app.get('/reviews/', (req, res) => {
    res.json("Welcome to reviews controller")
  })

  app.get('/reviews/new', (req, res) => {
    res.render('review-new')
  })

  app.post('/reviews/new', (req, res) => {
    const review = new Review(req.body)
    review.save((err, post) => {
      return res.redirect('/reviews')
    })
  })
}
