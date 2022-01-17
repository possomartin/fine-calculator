const Item = require('../models/item');

/* Get All Items */
module.exports.getAllItems = (callback) => {
    Item.find(callback);
}

/* Get Item By ID */

module.exports.getItemByID = (itemID, callback) => {
    let query = {_id: itemID};
    Item.findById(query, callback);
}

/* Add new Item */

module.exports.addItem = (newItem, callback) => {
    newItem.save(callback);
}


