import { pool } from "../db/database.js";

export function createRepository(tableName) {
  async function create(data) {
    const keys = Object.keys(data).join(", ");
    const values = Object.values(data);
    const placeHolers = values.map(() => "?");
    const [result] = await pool.execute(
      `INSERT INTO ${tableName} (${keys})
        VALUES (${placeHolers})`,
      values,
    );
    return result.insertId;
  }
  async function update(data, id) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map((k) => `${k}=?`).join(", ");
    const [result] = await pool.execute(
      `UPDATE ${tableName} SET ${setClause} WHERE id=?`,
      [...values, id],
    );
    return result.affectedRows > 0;
  }
  async function findById(id) {
    const [result] = await pool.execute(
      `SELECT * FROM ${tableName} WHERE id=?`,
      [id],
    );
    return result[0] || null;
  }
  return { tableName, create, update, findById };
}
