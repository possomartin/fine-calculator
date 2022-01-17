const express = require('express');
const router = express.Router();

const Team = require('../bd/models/team');
const TeamsController = require('../bd/controllers/teamsController');


/* Get all teams */

router.get('/all', (req, res) => {
    TeamsController.getAllTeams((err, teams) => {
        if(err) throw err;

        if(teams)
        {
            res.status(200).send(teams);
        }
    });
});

/* Get Team by ID */

router.get('/:id', (req, res) => {
    TeamsController.getTeamByID(req.params.id, (err, team) => {
        if(err) throw err;

        if(team)
        {
            res.status(200).send(team);
        }
    });
});

/* Add new Team */

router.post('/', (req, res) => {
    let newTeam = new Team({
        name: req.body.name,
        members: req.body.members
    });

    TeamsController.addTeam(newTeam, (err, team) => {
        if(err) throw err;

        if(team)
        {
            res.status(200).send(team);
        }
    });
});

module.exports = router;