const ApiWrapper = require('yelp-api-wrapper')
require('dotenv').config();

module.exports = app => {
  app.get('/search/:locationQuery', (req, res) => {
    const apiInstance = new ApiWrapper(process.env.API_KEY, "pastrami", req.params.locationQuery)
    apiInstance.getNamesAndReviews().then((json) => {
      res.json(json)
    }).catch((err) => {
      console.log(err)
    })
  })
}
