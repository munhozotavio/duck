const db = require('./db');
const {emptyOrRows} = require('./helpers');

async function getVehicles() {
    const sql = `SELECT * FROM vehicle`
    const rows = await db.query(sql);
    const data = emptyOrRows(rows);

    return data;
}


async function createVehicle(req){
    const sql = `INSERT INTO vehicle
    (plate, model, color, year) 
    VALUES
    (?, ?, ?, ?)`

    const result = await dq.query(sql, [req.plate, req.model, req.color, req.year]);
    
    const message = (!result.affectedRows) ? 'Erro ao cadastrar o veículo!' : 'Veículo cadastrado com sucesso!'

    return message;
}

module.exports = {
    getVehicles,
    createVehicle
}