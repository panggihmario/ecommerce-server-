var express = require('express');
var router = express.Router();
const ItemController = require('../controller/itemController')



router.post('/addItem',ItemController.addItem)





module.exports = router