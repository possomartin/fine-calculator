const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    members: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Team = module.exports = mongoose.model('Team', TeamSchema);