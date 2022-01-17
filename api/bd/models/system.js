const mongoose = require('mongoose');

const SystemSchema = mongoose.Schema({
    items: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }],
    leader: 
    {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    team:
    {
        type: mongoose.Types.ObjectId,
        ref: 'Team'
    },
    startDate:
    {
        type: Date,
        require: true,

    },
    dueDate:
    {
        type: Date,
        require: true,
        
    },
    returnedDate:
    {
        type: Date,
        require: false,        
    },
    status: {
        type: String,
        require: true
    },
    fine:
    {
        type: Number,
        require: false
    }
});

const System = module.exports = mongoose.model('System', SystemSchema);