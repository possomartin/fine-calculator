const express = require('express');
const router = express.Router();

const User = require('../bd/models/user');
const UserController = require('../bd/controllers/usersController');

/* Get All Users */
router.get('/all', (req, res) => {
    UserController.GetAllUsers((err, users) => {
        if(err) throw error;

        if(users)
        {
            res.status(200).send(users);
        }
    });
});

/* Get User By ID */
router.get('/:id', (req, res) => {
    UserController.GetUserByID(req.params.id, (err, user) => {
        if(err) throw err;
        
        if(user)
        {
            res.status(200).send(user);
        }
    });
});

/* Add new User */

router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name
    });

    UserController.addUser(newUser, (err, user) => {
        if(err) throw err;

        if(user)
        {
            res.status(200).send(user);
        }
    });
});

module.exports = router;