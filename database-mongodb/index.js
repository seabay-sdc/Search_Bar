
const MongoClient = require('mongodb').MongoClient;
let dbo;

const client = MongoClient.connect("mongodb://localhost:27017/SDC", { useNewUrlParser: true }, function(err,db) {
  if (err) {throw err};
  
  console.log("connected to MongoDB locally ya silly goose");
  dbo = db.db("SDC");
})
const getOne = () => {
  console.log('On my way to snag one');
 return dbo.collection("seabayItems").findOne({"_id": 5})
};

const getAll = () => {
  console.log('everything will be mine');
  return dbo.collection("seabayItems").find()
};


module.exports = { getOne, getAll }