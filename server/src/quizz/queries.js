//Queries related to quizzes table
const getAllQuizzes = "SELECT * FROM quizzes"

const getQuizQuestions = "SELECT * FROM questions WHERE quiz_id = $1"


module.exports = {
    getAllQuizzes,
    getQuizQuestions,
}