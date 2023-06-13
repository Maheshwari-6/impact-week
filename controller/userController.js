const user = require('../model/userModel');
const signupModel = require('../model/signupModel');
let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const homePage = (req, res) => { 
    user.find()
    //.sort({create_at : '-1'})
    .then((result) => {res.render('homePage', {user : result})})
    .catch(err => console.log(err))   
} 

const loginUser = (req, res) => {    
    res.render('outh', {error:""});
} 

const questionAddition = (req, res) => {    
    user.find()
    .then((err) => res.render('addQuestion'))
    .catch(err => console.log(err))
}

const postQuestion = (req,res) =>{
    let newUser = new user(req.body);
    newUser.save()
    .then((result) => res.redirect('/'))
    .catch(err => res.render('addQuestion'))
}

const signUp = async (req, res) => {
    //Check if the user is already in the DB 
    let existedUser = await signupModel.findOne({email: req.body.email});

    if(existedUser) {
        res.render('outh', {
            error: "user exist",
            success: ""
        })
    }else{
        let hashedPass = bcrypt.hashSync(req.body.password, 12)
        
        let userObj = {
            ...req.body,
            password: hashedPass
        }

        let newUser = new signupModel(userObj);
        newUser.save()
        .then( () => {
            res.locals.success = "User has been added";
            res.redirect('/');
        })
        .catch( (err) => {
            throw err
        })
    }
}

module.exports = {
    homePage,
    loginUser,
    questionAddition,
    postQuestion,
    signUp
}