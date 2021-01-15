const express = require('express');
const app = express();
const port = 8000;
app.use('/signin', express.static(__dirname + '/components/signin'))
app.use('/signup', express.static(__dirname + '/components/signup'))
app.use('/chat', express.static(__dirname + '/components/chat'))
app.use('/chat-list', express.static(__dirname + '/components/chatList'))
app.listen(port, ()=>console.log(`server running at http://localhost:${port}`))
