const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_restApi'
});

connect.connect((err) => {
    if(err) throw err;
    console.log('database connect');
})

module.exports = connect;