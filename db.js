const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test1',
  password: 'postgres',
  port: 5432,
})

pool.connect();

// pool.query('SELECT 1 + 1 AS solution', function(error, res){
//   if(error)
//     throw error;
//   console.log('The solution is: ',res[0].solution);  
// })



module.exports = pool;