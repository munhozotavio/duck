const db = require('./db');
const {emptyOrRows} = require('./helpers');

async function getVehicles(req) {
    const sql = `SELECT id,car_id, lat, lng FROM mocked_localization WHERE car_id = ? ORDER BY instant DESC LIMIT 1;`
    const rows = await db.query(sql, [req.plate]);
    const data = emptyOrRows(rows);

    return data;
}

module.exports = {
    getVehicles
}