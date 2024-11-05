const {Router} = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getAllQuizzes);

router.get('/questions/:id', controller.getQuizQuestions);

router.get('/options/:id', controller.getQuestionOptions);



module.exports = router;