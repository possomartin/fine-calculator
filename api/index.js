/* Import Libraries */
const express = require('express');
const cors = require('cors');

/* Database Connection*/
const {mongoose} = require('./bd/mongoose');

/* Set Server */
const app = express();
const port = process.env.PORT || 3000;

/* Mongo Models */

const Items = require('./routes/items');
const Users = require('./routes/users');
const Teams = require('./routes/teams');
const System = require('./routes/system');


/* Middlewares */

app.use(cors());

/* Middleware Parser */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* Routes */

app.use('/api/items', Items);
app.use('/api/users', Users);
app.use('/api/teams', Teams);
app.use('/api/system', System);

/* Initialize Server */
app.listen(port, () => {
    console.log("Server listening on port: ", port);
});
