//Queries related to quizzes table
const getAllQuizzes = "SELECT * FROM quizzes"

const getQuizQuestions = "SELECT * FROM questions WHERE quiz_id = $1"

const getQuestionOptions = "SELECT * FROM options WHERE question_id = $1"

const getTitle = "SELECT title FROM quizzes WHERE quiz_id = $1"

const getAllUsers = "SELECT * FROM users"

const getScore = "SELECT * FROM quiz_submissions WHERE user_id = $1"

const postSubmission = "INSERT INTO quiz_submissions (quiz_id, user_id, score) VALUES ($1, $2, $3)"

//sample POST
const addUser = "INSERT INTO users (name , email, password, role) VALUES ($1, $2, $3, $4)"



module.exports = {
    getAllQuizzes,
    getQuizQuestions,
    getQuestionOptions,
    getTitle,
    getAllUsers,
    postSubmission,
    addUser,
    getScore
}