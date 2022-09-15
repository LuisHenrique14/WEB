var express = require('express'); 
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost:27017/node-angular');
const User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/message', (req, res) => {
    var messageVar = req.body.messageBody;
    res.redirect('/message/' + messageVar);
});

router.get('/message/:msgParam', (req, res) => {
    res.render('node', {message: req.params.msgParam});
});


router.get('/node-mongodb-mongoose-user', function(req, res, next) {
    res.render('node');
});

router.post('/node-mongodb-mongoose-user', function(req, res, next) {
    var emailVar = req.body.emailBody;
    var userObject = new User({
        firstName: 'Luis Fernando',
        lastName: 'de Melo Nunes',
        password: 'testeabc123',
        email: emailVar
    });
    userObject.save();

    res.redirect('/node-mongodb-mongoose-user');
});

router.get('/node-mongodb-mongoose-user-busca', function (req, res, next) {
    User.findOne({}, function(err, documents){
        if (err){
            return res.send('Error!! :-(');
        }
        res.render('node', {firstNameV: documents.firstName,
                            lastNameV: documents.lastName,
                            passwordV: documents.password,
                            emailV: documents.email,
                            messagesV: documents.messages,
                            idV: documents._id
                            });
    });
});

module.exports = router;
