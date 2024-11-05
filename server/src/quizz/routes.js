const {Router} = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getAllQuizzes);

router.get('/questions/:id', controller.getQuizQuestions);

router.get('/options/:id', controller.getQuestionOptions);

router.get('/title/:id', controller.getTitle);



module.exports = router;