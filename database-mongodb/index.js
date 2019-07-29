
const MongoClient = require('mongodb').MongoClient;
let dbo;

const client = MongoClient.connect("mongodb://localhost:27017/SDC", { useNewUrlParser: true }, function(err,db) {
  if (err) {throw err};
  
  console.log("connected ya silly goose");
  dbo = db.db("SDC");
})
const getOne = () => {
  console.log('i got hit');
 return dbo.collection("seabayItems").findOne({"_id": 5})
};



module.exports = { getOne }