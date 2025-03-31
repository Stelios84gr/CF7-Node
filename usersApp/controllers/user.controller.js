const user = require('../models/user.model');

exports.findAll = async(req, res) => {
    console.log("Find all users from collection 'Users'.");

    try {
        const result = await user.find();

        res.json({ status: true, data: result });   // status μέσα στο body του response: structured/enveloped json response, συμπληρωματικά με το HTTP response
    } catch (err) {
        console.log("Problem in reading 'Users'.", err);
        res.json({ status: false, data: err })
    }
}

exports.findOne = async(req, res) => {
    console.log('Find a user with a specific username.');
    let username = req.params.username;

    try {
        const result = await user.findOne({username: username}); // αν δεν υπάρχει ο user δεν θα περάσει στο catch, θα επιστραφεί json με άδειο data
        res.json({ status: true, data: result })
    } catch (err) {
        console.log('Problem in finding user.', err);
        res.json({ status: false, data: err })
    }
}

exports.create = async(req, res) => {
    console.log('Create user.')

    let data = req.body;

    const newUser = new user({
        username: data.username,
        password: data.password,
        name: data.name,
        surname: data.surname,
        email: data.email,
        address: {
            area: data.address.area,
            road: data.address.road
        }
    });

    try {
        const result = await newUser.save();

        res.json({ status: true, data: result })
    } catch (err) {
        console.log('Problem in creating user.', err);
        res.json({ status: false, data: err });
    }
}