const pool = require('../../db');
const queries = require('./queries');

const getAllQuizzes = (req, res) => {
    pool.query(queries.getAllQuizzes, (error, results) => {
        if (error) throw error;
        res.json(results.rows);
    })
}

module.exports = {
    getAllQuizzes,
} 