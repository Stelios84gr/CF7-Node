const mongoose = require("mongoose");
const app = require('./app')
const port = 3000;

mongoose.connect(process.env.MONGODB_URI)   // εκχωρούμε μεταβλητές που έχουμε ορίσει στο .env
    .then(
        () => {
            console.log("Connection to MongoDB established.");

            app.listen(port, (req, res) => {
                console.log("Server is running.")
            })
        },
        err => { console.log ('Failed to connect to MongoDB.', err); }
    )