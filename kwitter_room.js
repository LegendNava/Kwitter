// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAUS_3Bbbj23FzNfQzOV17wLnjSDGnRPuQ",
      authDomain: "kwitter-de8e8.firebaseapp.com",
      databaseURL: "https://kwitter-de8e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-de8e8",
      storageBucket: "kwitter-de8e8.appspot.com",
      messagingSenderId: "1062642761279",
      appId: "1:1062642761279:web:657af63cf90e60d061828a"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!"

function addRoom() {
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding-room"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("Roomname", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}