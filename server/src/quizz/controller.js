const pool = require('../../db'); //importing the pool to query it
const queries = require('./queries'); //importing object with queries

//Get request where req does not contain any values and only res is used
const getUsers = (req, res) => {    //creating new function that can be used in routes.js
    pool.query(queries.getAllUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserByID = (req, res) => {
    const id = parseInt(req.params.id); //gets the id parameter from the route from :id
    pool.query(queries.getOneUser, [id], (error, results) => {  // the square bracket is used to pass in the parameters
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

//Post request where req also contains value / data
const addUser = (req, res) => {                               
    const {name, email, password, role} = req.body // Javascript Destructuring where it does name = req.body.name and so on
    
    //check if email already exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (error) throw error;
        if (results.rows.length){
            res.send("Email already exists");
        }
        
        pool.query(queries.addUser, [name, email, password, role], (error, results) => {
            if (error) throw error;
            //204 means that user has been created successfully
            res.status(204).send("User created successfully")
        })
    })
}


const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteUser, [id], (error, results)=> {
        if (error) throw error;
        res.send("Deleted Row");
    })
}

const changeName = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    pool.query(queries.changeName, [name, id], (error, results) => {
        if (error) throw error;
        res.send("Successfully Updated");
    })
}

module.exports = {
    getUsers,
    getUserByID,
    addUser,
    deleteUser,
    changeName,
}