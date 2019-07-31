const { Client, Pool } = require('pg');
const connectionString = 'http://localhost:5432/sdc';

const pool = new Pool();
const cl = new Client({
    connectionString: connectionString
});
const connecting = () => {
  cl.connect();
  console.log(`We've infiltrated the postgres database`)
}
connecting();

const snag = async (id) => {
  console.log(`we're attempting to get in there at postgres`)
  const query = await cl.query(`SELECT * FROM seabayItems where _id = ${id};`);
  return new Promise ((resolve, reject) => {
    resolve(query);
  });
}


module.exports = { snag }