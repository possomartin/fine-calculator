const express = require('express');
const router = express.Router();

const ItemController = require('../bd/controllers/itemsController');
const Item = require('../bd/models/item');

/* Get All items */
router.get('/all', (req, res) => {
    ItemController.getAllItems((err, items) => {
        if(err) throw err;
        
        res.status(200).send(items);
    });
});

/* Get Item by ID */
router.get('/:id', (req, res) => {
    ItemController.getItemByID(req.params.id, (err, item) => {
        if(err) throw err;
        
        if(item)
        {
            res.status(200).send(item);
        }
    });
});

/* Add new Item */

router.post('/', (req, res) => {
    
    let newItem = new Item({
        name: req.body.name
    });

    ItemController.addItem(newItem, (err, item) => {
        if(err) throw err;
        
        if(item)
        {
            res.status(200).send(item);
        }
    });
});

module.exports = router;