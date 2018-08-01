var express = require('express');
var router = express.Router();
const ItemController = require('../controller/itemController')



router.post('/addItem',ItemController.addItem)
router.get('/listitem',ItemController.getItem)
router.get('/filter/:category',ItemController.sortItem)
router.post('/edit/:id',ItemController.editItem)





module.exports = router