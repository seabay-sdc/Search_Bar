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

const snag =  (id) => {
  console.log(`we're attempting to get in there at postgres`)
  cl.query(`SELECT * FROM seabayItems where _id = ${id};`);
}


module.exports = { snag }