const express = require('express')
// const response = require('../../network/response')
const router = express.Router();
const controller = require('./controller')

router.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
    // const filterMessages = req.query.chat || null;
    // controller.getMessage(filterMessages)
    //     .then((messageList)=>{
    //         response.success(req, res, 200,messageList)
    //     })
    //     .catch((e)=>{
    //         response.error(req, res,500,'Error geting the message');
    //         console.log(e)
    //     })
}) 
router.post('/',(req, res)=>{
    // controller.addMessage(req.body.chat,req.body.user, req.body.message, req.file)//escribe los datos recibidos
    //     .then((fullMessage)=>{
    //         response.success(req, res, 201,fullMessage) //verifica si los datos se enviaron completamene
    //         console.log(req.body.message)
    //         console.log(req.body.user)
    //     })
    //     .catch((e)=>{
    //         response.error(req, res, 400,"Message or user not defined") //hace el catch del error
    //     })
})
router.patch('/:id', (req, res)=>{
    // controller.updateMessage(req.params.id, req.body.message)
    //     .then((data)=>{
    //         response.success(req,res,200, data)
    //     })
    //     .catch(e=>{
    //         response.error(req, res, 500, "Internal server error")
    //         console.error(e)
    //     })
})
router.delete('/:id', (req,res)=>{
    // controller.deleteMessage(req.params.id)
    //     .then(()=>{
    //         response.success(req,res,200, `User message [${req.params.id}] deleted`)
    //     })
    //     .catch(e=>{
    //         response.error(req, res, 500, e);
    //     })
})
module.exports = router