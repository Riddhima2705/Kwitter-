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

    user_name=localStorage.getItem("username");
    document.getElementById("user_display").innerHTML="Welcome "+user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
 function AddRoom(){
       Room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(Room_name).update({
             purpose: "Adding roomname"
       });
       localStorage.setItem("room", Room_name);
       window.location="kwitter_page.html";
       }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room", name);
window.location="kwitter_page.html";
}
function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room");
      window.location="index.html";
}
