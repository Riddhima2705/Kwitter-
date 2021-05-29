var firebaseConfig = {
      apiKey: "AIzaSyARIwZ_oLU2157-7bD4AzJGDuDkANcxSH8",
      authDomain: "kwitter-web-app-d77fe.firebaseapp.com",
      databaseURL: "https://kwitter-web-app-d77fe-default-rtdb.firebaseio.com",
      projectId: "kwitter-web-app-d77fe",
      storageBucket: "kwitter-web-app-d77fe.appspot.com",
      messagingSenderId: "783076989956",
      appId: "1:783076989956:web:69e59f05c04aafa98c6951"
    };
    firebase.initializeApp(firebaseConfig);
  
    User_name=localStorage.getItem("username");
    Room_name=localStorage.getItem("room");

    function send(){
          msg=document.getElementById("message").value;
          firebase.database().ref(Room_name).push({
          name:User_name,
          message:msg,
          like:0 
          });

          document.getElementById("message").value="";
    }
function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(message_data);

         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_with_tags="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         msg_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='like_button_clicked(this.id)'>";
         button_design="<span  class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
         display=name_with_tags+msg_with_tag+like_button+button_design;
         document.getElementById("output").innerHTML+=display;     
      } });  }); }
getData();

function like_button_clicked(message_id){
      button_id=message_id;
      get_value=document.getElementById(button_id).value;
      likes=Number(get_value)+1;
      firebase.database().ref(Room_name).child(message_id).update({
            like: likes
      });
}
function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room");
      window.location="index.html";
}



