const db = require('./db');
const {emptyOrRows, encryptPassword, comparePassowrd} = require('./helpers');
var uuid = require('uuid');

async function executeLogin(req) {
    const sql = `SELECT access_token, password FROM user WHERE email=? AND active=1`
    const rows = await db.query(sql, [req.email]);
    const data = emptyOrRows(rows);

    if (data.length > 0) {
        if (await comparePassowrd(req.password, data[0].password)) return data[0].access_token 
        else return []
    } return data;
}

async function checkToken(req) {
    const sql = 'SELECT email from user WHERE access_token=?'
    const rows = await db.query(sql, [req.access_token]);
    const data = emptyOrRows(rows);

    if (data.length) return true;
    return false;
}

async function createUser(req){
    const encryptedPassword = await encryptPassword(req.password);
    const token = uuid.v4();
    const sql = `INSERT INTO user (email, name, password, access_token) VALUES (?, ?, ? , ?)`

    const result = await db.query(sql, [req.email, req.name, encryptedPassword, token]);
    
    const message = (!result.affectedRows) ? 'Erro ao cadastrar usuário!' : 'Usuário cadastrado com sucesso!'

    return message;
}

module.exports = {
    executeLogin,
    checkToken,
    createUser
}