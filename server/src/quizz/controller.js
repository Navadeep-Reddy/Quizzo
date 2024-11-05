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

const getQuestionOptions = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getQuestionOptions, [id], (error, results) => {
        if (error) throw error;
        res.json(results.rows);
    })
}

const getTitle = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getTitle, [id], (error, results) => {
        if (error) throw error;
        res.json(results.rows);
    })
    
}

const getAllUsers = (req, res) => {
    pool.query(queries.getAllUsers, (error, results) => {
        if (error) throw error;
        res.json(results.rows);
    })
}

const postSubmission = (req,res) => {
    const {quiz_id, user_id, score} = req.body;
    pool.query(queries.postSubmission, [quiz_id, user_id, score], (error, results) => {
        if (error) throw error;
        res.send("Successfully Added Row")
    } )
}


//sample working
const addUser = (req, res) => {                               
    const {name, email, password, role} = req.body // Javascript Destructuring where it does name = req.body.name and so on
    
        
    pool.query(queries.addUser, [name, email, password, role], (error, results) => {
        if (error) throw error;
        //204 means that user has been created successfully
        res.status(204).send("User created successfully")
    })

}



module.exports = {
    getAllQuizzes,
    getQuizQuestions,
    getQuestionOptions,
    getTitle,
    getAllUsers,
    postSubmission,
    addUser,
} 