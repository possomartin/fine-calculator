const Team = require('../models/team');

/* Get All Teams */

module.exports.getAllTeams = (callback) => {
    Team.find(callback).populate('members');
}

/* Get Team By ID */

module.exports.getTeamByID = (TeamID, callback) => {
    let query = {_id: TeamID};

    Team.findById(query, callback).populate('members');
}

/* Add new Team */

module.exports.addTeam = (newTeam, callback) => {
    newTeam.save(callback);
}