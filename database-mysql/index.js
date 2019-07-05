var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fec'
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

const search = (searchterm, callback) => {
  console.log("searchterm in database index is : ", searchterm);
  connection.query(`INSERT INTO searchterms (searchterm) VALUES ("${searchterm}")`, (error, results) => {
    if (error) {throw(error);}
    else {
    console.log("insert into db success");
    }
  } 
  )
  connection.query(`SELECT * FROM searchterms;`, (err, results) => {
    if (err) {throw(err)}
    else {
      console.log("here is the whole table : ", results);
      callback(results);
    }
  })
}



module.exports = { search, test };
