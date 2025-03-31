const express = require("express");
const app = express();

app.use(express.json());    // allows express to parse JSON files in incoming requests automatically

const user = require('./routes/user.routes');

app.use('/api/users', user) // για οποιαδήποτε κλήση στο /api/users, καλούνται οι διαδικασίες στο user.routes

module.exports = app;