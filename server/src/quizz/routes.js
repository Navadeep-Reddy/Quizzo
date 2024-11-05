const {Router} = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getAllQuizzes);

router.get('/questions/:id', controller.getQuizQuestions);

router.get('/options/:id', controller.getQuestionOptions);

router.get('/title/:id', controller.getTitle);

router.get('/users', controller.getAllUsers);

router.post('/sub',controller.postSubmission);

router.post('/add', controller.addUser)



module.exports = router;