const {Router} = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getAllQuizzes);

router.get('/questions/:id', controller.getQuizQuestions);



module.exports = router;