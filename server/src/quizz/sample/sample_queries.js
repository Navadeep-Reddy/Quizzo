const getAllUsers = "SELECT * FROM users";
const getOneUser = "SELECT * FROM users WHERE user_id = $1" // $1 is like a placeholder
const checkEmailExists = "SELECT * FROM users WHERE email = $1"
const addUser = "INSERT INTO users (name , email, password, role) VALUES ($1, $2, $3, $4)"
const deleteUser = "DELETE FROM users WHERE user_id = $1"
const changeName = "UPDATE users SET name = $1 WHERE user_id = $2"

module.exports = {
    getAllUsers,
    getOneUser,
    checkEmailExists,
    addUser,
    deleteUser,
    changeName,
}