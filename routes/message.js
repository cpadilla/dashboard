var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/message', function (req, res, next) {
    console.log("api/message called!");
  let msg = { msg: "Welcome to Vue.js App!" }
  res.json(msg).end()
})

module.exports = router
