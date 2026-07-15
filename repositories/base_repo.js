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
  return { tableName, create };
}
