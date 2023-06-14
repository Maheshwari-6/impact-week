const express = require ('express');
const userController = require('../controller/userController');
//const signupController = require('../controller/signupController')
const auth = require('../middleware/auth')

const route = express.Router();

route.get('/', userController.homePage);
route.post('/new-account', userController.signUp);
route.post('/login', userController.logIn);

route.get('/outh', userController.loginUser);

route.get('/addQuestion', userController.questionAddition);

route.post('/postQuestion', userController.postQuestion);




module.exports = route;