// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDGB9GcvmqWlW-B3AbsJFvsyFcN0cHEfKo",
      authDomain: "kwitter-21d06.firebaseapp.com",
      databaseURL: "https://kwitter-21d06-default-rtdb.firebaseio.com",
      projectId: "kwitter-21d06",
      storageBucket: "kwitter-21d06.appspot.com",
      messagingSenderId: "321319995284",
      appId: "1:321319995284:web:094346d57fbf3ee833b181"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+Room_names);
      row="<div class='room_name' id="+ Room_names + " onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}