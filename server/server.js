// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;
const db = require("../database-mysql/index.js");
const mdb = require("../database-mongodb/index.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'))

app.get('/getall', (req, res) => {
  console.log('getting ...')
  db.getAll((results) => {
    //console.log("app.get db.getAll reuslts are : ", results);
    res.send(results);
  })
  //res.status(200).send(results);
});

app.get('/getone', (req, res) => {
  console.log('getting one from MongoDB');
  mdb.getOne()
  .then((results) => {
    console.log(results);
    res.send(results);
  })
  .catch((err) => {
    console.log(err);
    res.send();
  })
})

app.post('/search', (req, res) => {
  //console.log("****", req.body.searchedTerm);
  db.fuzzySearch(req.body.searchedTerm , (results) => {
    // if (err) {
    //   console.log("err is : ", err);
    //   res.send("error");
    // }
    // else {
      console.log("server results are : ", results);
      results = results.toString()
      res.send(results);
    } 
   ) 
})


app.listen(port, () => console.log(`Server is running on ${port}`));