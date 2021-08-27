 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBWNW9FA4eXqdSApfEDpU8jg1Vjc7v40RM",
    authDomain: "kwitter-2e2df.firebaseapp.com",
    databaseURL: "https://kwitter-2e2df-default-rtdb.firebaseio.com",
    projectId: "kwitter-2e2df",
    storageBucket: "kwitter-2e2df.appspot.com",
    messagingSenderId: "1045658992807",
    appId: "1:1045658992807:web:7969d0ebd5b7e2e5aa5b82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function add_room() {
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
localStorage.setItem("room name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name= "+Room_names);
      row= "<div class= 'room_name' id= "+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room name",name);
  window.location="kwitter_page.html";
}

 function logout() {
  localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "kwitter.html";
 }