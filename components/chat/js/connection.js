var urlParams = new URLSearchParams(window.location.search);
var chatID = urlParams.get('chat')
var userID = urlParams.get('user')
$.ajax({
 type : "GET",
 datatype : "jsonp",
 url : `http://localhost:3000/message?chat=${chatID}`,
 success: function(data){
    var data_length = data.Message.length
    console.log(data)
    for(var i = 0; i < data_length; i++){
        var MyMessages = data.Message[i].message
        $('#messages').append($(`<li id="message-text${i}"></li><br>`).text(MyMessages))
    }
    for(var i = 0; i < data_length; i++){
        var MyUsers = data.Message[i].user[0].name
        $(`#message-text${i}`).append($(`<div id="message-data${i}"></div>`))
        $(`#message-data${i}`).append($(`<div id="message-user${i}"></div>`).text(MyUsers))
    }
    for(var i = 0; i < data_length; i++){
        var myDates = data.Message[i].date
        $(`#message-data${i}`).append($(`<p id="message-date"></p>`).text(myDates))
        $(`#message-data${i}`).append($(`<button id="message-opt${i}"><span class="material-icons" id="iconDelete">delete</span></button>`))
        $(`#message-data${i}`).append($(`<button id="message-opt${i}"><span class="material-icons" id="iconEdit">create</span></button>`))
    }
}})
$(function () {
    const socket = io('ws://localhost:3000', {
        withCredentials: true,
    });
    $('form').submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', $('#message').val());
        var message = $('#message').val();
        var file_data = $('#fileinput').prop('files');   
        axios.post('http://localhost:3000/message', {
            user: userID,
            chat: chatID,
            message: message,
            file : file_data
          })
          .then(function (response) {
            $("emoji-picker").removeClass("active");
            $('.form-control').val('')
          })
    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });
});
