const express = require ('express');
const userController = require('../controller/userController');
//const signupController = require('../controller/signupController')
const auth = require('../middleware/auth')

const fullQuestionController = require('../controller/fullQuestionController')
const route = express.Router();

route.get('/', userController.homePage);
route.post('/new-account', userController.signUp);
route.post('/login', userController.logIn);

route.get('/outh', userController.loginUser);

route.get('/addQuestion', userController.questionAddition);

route.post('/postQuestion', userController.postQuestion);

//see full question 

route.get('/question/:id', fullQuestionController.getQuestionDetails);


// edit question
route.get('/question/edit/:id', fullQuestionController.editQuestion);
route.post('/update-question/:id', fullQuestionController.updateQuestion);

//delete question
route.post('/delete-question/:id', fullQuestionController.deleteQuestion);

//comment a question

route.post('/question/:id/comment',fullQuestionController.addComment);


module.exports = route;