const firebaseConfig = {
    apiKey: "AIzaSyCByx57qSn8WoeEGPd3KwCVOKsrDSGOz2M",
    authDomain: "kwitter-40098.firebaseapp.com",
    databaseURL: "https://kwitter-40098-default-rtdb.firebaseio.com",
    projectId: "kwitter-40098",
    storageBucket: "kwitter-40098.appspot.com",
    messagingSenderId: "388763299420",
    appId: "1:388763299420:web:515520153fe85c26994099"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
function addRoom()
{
    room_name= document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name",room_name);
    window.location="LETSCHAT_room.html";
}

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room Name-" + Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location="LETSCHAT_page.html";
}
