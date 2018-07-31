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

    static getItem(req,res){
        Item.find({})
        .then(data=>{   
            // console.log(data)
            res.json(data)
        })
        
    }

    static sortItem(req,res){
        Item.find({
            category : req.params.category
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
        
    }

}

module.exports = ItemController
