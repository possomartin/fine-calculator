const User = require('../models/user');

/* Get All Users */

module.exports.GetAllUsers = (callback) => {
    User.find(callback);
}

/* Get User By ID */

module.exports.GetUserByID = (userID, callback) => {
    let query = {_id: userID};

    User.findById(query, callback);
}

/* Add new User */

module.exports.addUser = (newUser, callback) => {
    newUser.save(callback);
}