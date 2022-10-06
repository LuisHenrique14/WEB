var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', (req, res) =>{
    var message = new Message({
        content: req.body.content
    });
    message.save((err, result) => {
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu na hora de salvar',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem salva com sucesso",
            objMessageSave: result
        });
    })
});

module.exports = router;