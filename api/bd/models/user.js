const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);