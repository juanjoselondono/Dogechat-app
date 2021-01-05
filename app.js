const express = require('express');
const app = express();
const port = 8000;
app.use('/user', express.static(__dirname + '/components/user/public'))
app.use('/chat', express.static(__dirname + '/components/chat/public'))
app.use('/chat-list', express.static(__dirname + '/components/chatList/public'))
app.listen(port, ()=>console.log(`server running at http://localhost:${port}`))
