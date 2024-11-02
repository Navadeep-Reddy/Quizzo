//This is basically for extending the path of server 

const { Router } = require('express'); //This is the same as const Router = expressobj.Router
const controller = require('./controller');
const router = Router();

router.get('/', controller.getUsers);

module.exports = router;