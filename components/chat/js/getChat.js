var urlParams = new URLSearchParams(window.location.search);
      var userID = urlParams.get('user')
      function filter(text){
          var text_length = text.length-2;
          var converted_text = text.substr(1,text_length);
          return converted_text 
      }
      $.ajax({
       type : "GET",
       datatype : "jsonp",
       url : `http://localhost:3000/chat/${userID}`,
       success: function(data){
          console.log(data.Message)
           var data_length = data.Message.length    
           for(var i = 0; i < data_length; i++){
              var myJSON = JSON.stringify(data.Message[i].name)
              var myID = JSON.stringify(data.Message[i]._id)
              $('#chat-list').append($(`<a id="chat-list-item" href='http://localhost:8000/chat?chat=${filter(myID)}&user=${userID}'></a><br>`).text(filter(myJSON)))
           }
          }
      }); 