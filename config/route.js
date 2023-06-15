const express = require ('express');
const userController = require('../controller/userController');
//const signupController = require('../controller/signupController')
const auth = require('../middleware/auth')

const fullQuestionController = require('../controller/fullQuestionController')
const route = express.Router();

route.get('/', auth.checkHomePageToken, userController.homePage);
route.post('/new-account', userController.signUp);
route.post('/login',   userController.logIn);
route.post('/logout',  userController.logOut);

route.get('/outh', userController.loginUser);

route.get('/addQuestion', auth.checkUserToken, userController.questionAddition);

route.post('/postQuestion', auth.checkUserToken, userController.postQuestion);

//see full question 

route.get('/question/:id', auth.checkHomePageToken, fullQuestionController.getQuestionDetails);


// edit question
route.get('/question/edit/:id', auth.checkUserToken, fullQuestionController.editQuestion);
route.post('/update-question/:id', auth.checkUserToken, fullQuestionController.updateQuestion);

//delete question
route.post('/delete-question/:id', auth.checkUserToken, fullQuestionController.deleteQuestion);

//comment a question

route.post('/question/:id/comment', auth.checkUserToken, fullQuestionController.addComment);

//Delete the comment of a question

route.post('/question/:question/delete-comment/:id', auth.checkUserToken, fullQuestionController.deleteComment);



module.exports = route;