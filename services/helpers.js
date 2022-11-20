const bcrypt = require('bcrypt');

async function encryptPassword(text) {
  const salt = await bcrypt.genSalt(10);

  const password = await bcrypt.hash(text, salt);

  return password;
}


function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
}
  

async function comparePassowrd(input, data) {
  return await bcrypt.compare(input, data);
}

module.exports = {
  encryptPassword,
  emptyOrRows,
  comparePassowrd
}