const mysql = require('mysql');
require('dotenv').config();
const fuz = require('fuzzy-search');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "UCF3xS2wjC"
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

const fuzzySearch = (searchterm, callback) => {
  console.log("searchterm  is : ", searchterm);
  connection.query(`SELECT searchterm FROM searchterms;`, (error, result) => {
    if (error) throw(error);
    else {
      const fuzzy = new fuz(result, ['searchterm'], {
        caseSensitive: false,
        sort: true,
      });
      const fuzzyResult = fuzzy.search(searchterm);
      console.log("fuzzyResult[0].searchterm", fuzzyResult[0]);
      callback(result.indexOf(fuzzyResult[0]))
    }
  });
}



module.exports = { search, test, getAll, fuzzySearch };

