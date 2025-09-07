const pool = require('../config/database');

const excuseService = {
  async getAllExcuses() {
    const result = await pool.query('SELECT * FROM excuses ORDER BY http_code');
    return result.rows;
  },

  async getExcuseByCode(httpCode) {
    const result = await pool.query('SELECT * FROM excuses WHERE http_code = $1', [httpCode]);
    return result.rows[0];
  },

  async getRandomExcuse() {
    const result = await pool.query('SELECT * FROM excuses ORDER BY RANDOM() LIMIT 1');
    return result.rows[0];
  },

  async createExcuse(httpCode, tag, message) {
    const result = await pool.query(
      'INSERT INTO excuses (http_code, tag, message) VALUES ($1, $2, $3) RETURNING *',
      [httpCode, tag, message]
    );
    return result.rows[0];
  }
};

module.exports = excuseService;