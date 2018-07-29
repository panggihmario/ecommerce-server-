const Item = require('../models/itemModels');


class ItemController {

    static addItem(req,res){
        Item.create({
            name : req.body.name,
            category : req.body.category,
            price : req.body.price,
            url : req.body.url
        })
        .then(dataItem=>{
            res.status(200).json(dataItem)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

}

module.exports = ItemController
