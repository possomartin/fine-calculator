const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);