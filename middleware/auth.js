// const jwt = require('jsonwebtoken')

// const checkHomePageToken = (req, res, next) => {
    
//     let token = req.header("cookie");

//     if(!token){
//         next();
//     }else{
//         res.redirect('/');
//     }

// }

// const checkUserToken = (req, res, next) => {
//     let token = req.header("cookie");

//     if(token){
//         next();
//     }else{
//         res.redirect('outh');
//     }
// }

// module.exports = {
//     checkUserToken,
//     checkHomePageToken
// }