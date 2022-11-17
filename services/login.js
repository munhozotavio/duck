const db = require('./db');
const {emptyOrRows} = require('./helpers');

async function executeLogin(req) {
    
    const sql = `SELECT access_token FROM user WHERE email=? AND password=?`
    const rows = await db.query(sql, [req.email, req.password]);
    const data = emptyOrRows(rows);
    
    return data;
}

async function checkToken(req) {
    const sql = 'SELECT email from user WHERE access_token=?'
    const rows = await db.query(sql, [req.access_token]);
    const data = emptyOrRows(rows);

    if (data.length) return true;
    return false;
}

module.exports = {
    executeLogin,
    checkToken
}