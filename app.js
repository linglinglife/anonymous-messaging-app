function changeText(parameter) {

  var newElement = document.createElement("p")
  newElement.id="newElement";
  newElement.innerHTML = document.getElementById('message').value;
  document.getElementById('message').value = '';
  //document.body.appendChild(newElement);

  var messageList = document.getElementById('user_message');
  messageList.insertBefore(newElement, messageList.childNodes[0]);

  parameter.preventDefault;

  submitClick(newElement.innerHTML);

  //document.body.appendChild(parameter);

    //document.write(parameter);
    //id.innerHTML = "Ooops!";
}

var message = document.getElementById("message");
var submitBtn = document.getElementById("submitBtn");

function submitClick(messageText) {
  console.log("Firebase: " + firebase)
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("message").set(messageText);

}
