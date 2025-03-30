const express = require('express');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.user(bodyParser.urlencoded({extended:false}));

app.use(express.json());  // το .use() είναι για να τρέχει ενδιάμεσες συναρτήσεις
app.use(express.urlencoded({extended:true}))  // αποκωδικοποιεί τα περιεχόμενα φόρμας στους headers (πχ. σύμβολα) για να διαβαστούν ως κείμενο

app.use('/', express.static('files'));  // μόλις γίνει κλήση στο root('/'), ανοίγουν τα στατικά αρχεία στον φάκελο files

const logger = (req, res, next) => {
  let url = req.url;
  console.log('Logger: ', req.body);
  let time = new Date();
  console.log('Received request for ' + url + ' at ' + time);

  next()  // επαναφέρει τον έλεγχο σε αυτόν μέσα απ' τον οποίο κλήθηκε (εδώ, app.post('/user'))
}

app.get('/', (req, res)=>{
  res.send("This is the home page");
});

app.post('/user', logger, (req, res) => { // προηγείται το logger
  let data = req.body;
  let username = req.body.username;
  let email = req.body.email;

  console.log(data);
  res.send(`User data ${username}, ${email}`);
});

app.post('/userForm', (req, res)=>{
  let data = req.body

  console.log("Data", data);
  res.send("UserForm Page");
});

app.use('/user1', (req, res) => {
  console.log("User 1")
  res.send("User 1 Page");
});

app.use('/user2', (req, res) => {
  console.log("User 2")
  res.send("User 2 Page");
});

/**
 * Θα αγνοηθεί επειδή το route /user2 ικανοποιεί το app.use() (short-circuit)
 */
app.use('/user2/hello', (req, res) => {
  console.log("User 2 Hello")
  res.send("User 2 Page Hello");
})

app.listen(port, ()=>{
  console.log("Server is running on port 3000.");
});