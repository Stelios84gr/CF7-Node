const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get('/create', (req, res) => {
    console.log("Create Page");
    // renders form.js file in views folder (required by ejs)
    res.render('form', {})
})

app.post('/user', (req, res) => {
    console.log("User Post");

    let data = req.body;
    console.log("Data: ", data);

    let username = data.username;
    let email = data.email;

    // renders /user (in 'views' folder) with the data from the following object (values are from form input element names)
    res.render('user',
    {
        data1: username,
        data2: email
    })

    // res.send("Post Page")
})

app.get('/users', (req, res) => {
    console.log("Users Page");

    const users = [
        {
            "username":"stelios",
            "email":"stilfridakis@aueb.gr"
        },
        {
            "username":"markos",
            "email":"marka@aueb.gr"
        }
    ]

    // renders /user (in 'views' folder), this time with data from {users} above
    res.render("users", {users})
})

app.listen(port, () => {
    console.log("Server is running.");
})