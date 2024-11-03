//This is basically for extending the path of server 

const { Router } = require('express'); //This is the same as const Router = expressobj.Router
const controller = require('./controller');
const router = Router();

//get all users
router.get('/', controller.getUsers);

//get single user by id
router.get('/:id', controller.getUserByID);

//create user by sending json by post
router.post('/', controller.addUser)

//delete user with delete
router.delete('/:id', controller.deleteUser)

//update user with put by passing in id and sending in name by json
router.put('/:id', controller.changeName)

module.exports = router;