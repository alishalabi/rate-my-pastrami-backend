module.exports = app => {
  app.get("/random-pastrami", (req, res) => {
    console.log(req.name)
  })
}
