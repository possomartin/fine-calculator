const express = require('express');
const router = express.Router();

const SystemController = require('../bd/controllers/systemController');
const System = require('../bd/models/system');

/* Get All Fines */

router.get('/all', (req, res) => {
    SystemController.getAllFines((err, fines) => {
        if(err) throw err;

        if(fines)
        {
            res.status(200).send(fines);
        }
    });  
});

/* Get Fine By ID */

router.get('/:id', (req, res) => {
    SystemController.getFineByID(req.params.id, (err, fine) => {
        if(err) throw err;

        if(fine)
        {
            res.status(200).send(fine);
        }
    });
});

/* Add new Fine */

router.post('/', (req, res) => {

    let newFine = new System({
        items: req.body.items,
        leader: req.body.leader,
        team: req.body.team,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        returnedDate: req.body.returnedDate,
        status: req.body.status,
        fine: req.body.fine
    });

    SystemController.addFine(newFine, (err, fine) => {
        if(err) throw err;

        if(fine)
        {
            res.status(200).send(fine);
        }
    });
});

/* Update a Fine */

router.patch('/:id', (req, res) => {

    SystemController.updateFine(req.params.id, req.body, (err, fine) => {
        if(err) throw err;

        if(fine) 
        {
            res.status(200).send(fine);
        }
    });
});

/* Calculate fine */

router.get('/fine/:id', (req, res) => {

    var Diff;
    var value;
    const base = 5;

    var diffTime = 0;

    var today = new Date();

    SystemController.getFineByID(req.params.id, (err, fine) => {
        if(err) throw err;

        if(fine)
        {
            let dueDate = fine.dueDate;
            let returnedDate = fine.returnedDate;

            if(dueDate === returnedDate || (returnedDate && returnedDate < dueDate))
            {
                value = 0;
            }
            else if(fine.status === "Returned")
            {
                diffTime = Math.abs(returnedDate - dueDate);
                Diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                value = Diff * base;
            }
            else if(fine.status === "Pending" && !returnedDate)
            {
                if(today > dueDate)
                {
                    diffTime = Math.abs(today - dueDate);
                    Diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    value = Diff * base;
                }
                else
                {
                    value = 0;
                }
            }
            else
            {
                diffTime = Math.abs(returnedDate - dueDate);
                Diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                value = Diff * base;                
            }

            if(value < 0)
            {
                value = (-1) * value;
            }

            /* Update Fine value inside Database */

            let newData = {fine: value};

            SystemController.updateFine(req.params.id, newData, (err, fine) => {
                if(err) throw err;

                if(fine)
                {
                    res.status(200).send({"fine": value, "of": fine});
                }
            });
        }
    });
});

module.exports = router;