const question = require('../model/userModel')
const comment = require('../model/comment')

const getQuestionDetails = (req, res) =>{
    question.findById(req.params.id)
    .populate('comments')
    .then(result => {
        res.render('fullQuestionAndComments' , {
            question: result,
        })
    })
    .catch(err => console.log(err))
}


//Edit question

const editQuestion =(req, res) =>{
    question.findById(req.params.id)
    .then(result => {
        res.render('editQuestion' , {
            question: result,
        })
    })
    .catch(err => {res.render('404')
})
}

const updateQuestion = (req, res) =>{
    question.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
     res.redirect(`/question/${result._id}`)
    })
    .catch(err => console.log(err))
 }


 const deleteQuestion = (req, res) => {
    question.findByIdAndDelete(req.params.id)
    .then(()=> {res.redirect('/')})
    .catch(err =>{ console.log(err)});    
}


const addComment = (req, res) => {    
    let newComment = new comment( {
        ...req.body,
        questionId: req.params.id
    }); 

    newComment.save()
    .then(result => {
        question.findById(req.params.id)
        .then(foundQuestion => {
            foundQuestion.comments.push(result)
            foundQuestion.save()
            .then(res.redirect(`/question/${req.params.id}`))
        })
    })
    .catch(err => console.log(err))
}
 


 module.exports={
    getQuestionDetails,
    editQuestion,
    updateQuestion,
    deleteQuestion,
    addComment

}