const mysql = require('mysql2/promise');
const config = require('./../sql_setup/config');


async function query(sql, params){
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);

    return results;
}

async function test_connection(){
    var connection = await mysql.createConnection(config.db);
    console.log("Conectou no mysql");
}

module.exports = {
    query,
    test_connection,
}
