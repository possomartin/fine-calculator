/* Connection with DB */

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUri = 'mongodb+srv://posso_martin:Sorensen2000$@finedb.rkvhe.mongodb.net/FINEDB?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB Successfully");
}).catch((e) => {
    console.log("Error while establishing with MongoDB");
    console.log(e);
});

module.exports = {
    mongoose
};