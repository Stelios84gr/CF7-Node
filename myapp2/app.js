const express = require('express');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.user(bodyParser.urlencoded({extended:false}));

// parses POST requests with Content-Type: application/json in header and gets JSON from the body
app.use(express.json());

// decodes form content data from POST request headers (including symbols, tables etc. - extended:true) so that they can be read as text
app.use(express.urlencoded({extended:true}))

// when a request in '/', opens static files in "files" folder, e.g., http://localhost:3000/myform.html
app.use('/', express.static('files'));

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

// logger appears first
app.post('/user', logger, (req, res) => {
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

// sets what to do when receiving requests at /user1
app.use('/user1', (req, res) => {
  console.log("User 1")
  res.send("User 1 Page");
});

app.use('/user2', (req, res) => {
  console.log("User 2")
  res.send("User 2 Page");
});

// ignored because /user2 route satisfies it (short-circuit)
app.use('/user2/hello', (req, res) => {
  console.log("User 2 Hello")
  res.send("User 2 Page Hello");
})

app.listen(port, ()=>{
  console.log("Server is running on port 3000.");
});