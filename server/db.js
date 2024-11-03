const Pool = require('pg').Pool; //A connection pool is a group of database connections maintained by the application so that these connections can be reused

const pool = new Pool({            // Making a new pool object 
    user: "postgres",
    host: "localhost",
    database: "quiz_system",
    password: "",
    port: "5432",
})

module.exports = pool; //exporting the pool object