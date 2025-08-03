const express = require('express');
const app = express();  // assigns express methods
const port = 3000;

app.get("/", (req, res) => {
    console.log("GET request");
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    console.log("About Page");
    res.send("This is the 'About' page.")
})

 app.get("/help", (req, res) => {
    console.log("Help Page");
    res.send("This is the 'Help' page.");
 })

 app.get("/user", (req, res) => {
    // localhost:3000/user?name=[name]&surname=[surname]&age=[age]
    let query = req.query;  // ==> query parameters

    let name = query.name;
    let surname = query.surname;
    let age = query.age;

    let length = Object.keys(query).length; // keys(query) because there are query parameters

    console.log("Query:", query,",", "Length:", length)
    res.send(`Name: ${name}, Surname: ${surname}, Age: ${age}, Length: ${length}`);
 })

 app.get('/user/:name/:surname/:age', (req, res) => {
    let params = req.params // ==> path parameters
    console.log("Params", params);

    let name = params.name;
    let surname = params.surname;
    let age = params.age;

    let length = Object.keys(params).length;    // keys(params) because there are path parameters

    console.log("Length: ", length)
    res.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`);
 })

app.listen(port, () => {
    console.log("Server is running on port 3000.");
});