// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: 'postgres',
//     password: 'kirukkupa',
//     host: 'localhost',
//     port: 5432,
//     database: 'BANK'
// });
// module.exports = pool;

const mysql = require('mysql2')
 
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQLPass123",
    database: "Bank"
})
 
// Connecting to database
connection.connect(function (err) {
    if (err) {
        console.log("Error in the connection")
        console.log(err)
    }
    else {
        console.log(`Database Connected`)
        connection.query(`SHOW DATABASES`,
            function (err, result) {
                if (err)
                    console.log(`Error executing the query - ${err}`)
                else
                    console.log("Result: ", result)
            })
    }
})