var express = require('express');
var router = express.Router();
const userCon = require('../controller/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',userCon.register)
router.post('/login',userCon.login)



module.exports = router;
