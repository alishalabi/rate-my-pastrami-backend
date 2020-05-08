const ApiWrapper = require('yelp-api-wrapper')
require('dotenv').config();

module.exports = app => {
  app.get('/random-pastrami/:zip', (req, res) => {
    const apiInstance = new ApiWrapper(process.env.API_KEY, "pastrami", req.params.zip)
    apiInstance.getRandom().then((json) => {
      res.json(json)
    }).catch(console.log("Error"))
  })
}
