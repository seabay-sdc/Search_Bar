var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "UCF3xS2wjC"
  //database: 'fec'
  //multipleStatements: true
});


const test = () => {
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) {throw(error);}
  else {
     console.log('The solution is: ', results[0].solution);
  }
});
}
const getAll = (callback) => {
  connection.query(`SELECT * FROM searchterms;`, (err, results) => {
    if (err) {console.error(err)}
    else {
      console.log("here is the whole table : ", results);
      callback(results);
    }
  })
}

const search = (searchterm, callback) => {
  console.log("searchterm  is : ", searchterm);
  connection.query(`SELECT id FROM searchterms WHERE searchterm = ("${searchterm}")`, (error, result) => {
    if (error) {throw(error);}
    else {
    console.log("index of "  + searchterm + " is " + result);
    callback(result)
    }
  })
}



module.exports = { search, test, getAll };
