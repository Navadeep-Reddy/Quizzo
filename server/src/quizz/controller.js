const pool = require('../../db');
const queries = require('./queries');

const getAllQuizzes = (req, res) => {
    pool.query(queries.getAllQuizzes, (error, results) => {
        if (error) throw error;
        res.json(results.rows);
    })
}

const getQuizQuestions = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getQuizQuestions, [id], (error, results) => {
        if (error) throw error;
        res.json(results.rows);
    })
}

module.exports = {
    getAllQuizzes,
    getQuizQuestions,
} 