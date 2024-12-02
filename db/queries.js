const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getSpecificMesage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function insertMessage(userText, userName, addedDate) {
  await pool.query(
    "INSERT INTO messages (user_text, user_name, added_date ) VALUES ($1, $2, $3)",
    [userText, userName, addedDate]
  );
}

module.exports = {
  getAllMessages,
  getSpecificMesage,
  insertMessage,
};
