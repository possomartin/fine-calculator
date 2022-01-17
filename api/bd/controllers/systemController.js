const System = require('../models/system');

/* Get All Fine */

module.exports.getAllFines = (callback) => {
    System.find(callback).populate('items').populate('leader').populate('team');
}

/* Get Fine by ID */

module.exports.getFineByID = (fineID, callback) => {
    let query = {_id: fineID};
    System.findById(query, callback).populate('items').populate('leader').populate('team');
}

/* add new Fine */

module.exports.addFine = (newFine, callback) => {
    newFine.save(callback);
}

/* Update fine */

module.exports.updateFine = (id, newData, callback) => {
    System.findByIdAndUpdate(id, {$set: newData}, callback);
}