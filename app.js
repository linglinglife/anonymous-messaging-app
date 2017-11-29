// this function gets executed when the user clicks submit on the page
function submitNewMessage(submitButton) {

  //addNewMessageToPage(document.getElementById("theNewMessageTheUserPutIntoTheTextField").value);

  pushNewMessageToFirebase(document.getElementById("theNewMessageTheUserPutIntoTheTextField").value);

  // clear user's input field
  document.getElementById("theNewMessageTheUserPutIntoTheTextField").value = "";

  // avoid page reload on form submission
  submitButton.preventDefault;
}

// function to add a new message at the top of the message list on the page
function addNewMessageToPage(newMessage) {
  var newElement = document.createElement("p")
  newElement.id="newElement";
  newElement.innerHTML = newMessage;

  var messageList = document.getElementById("user_message");
  messageList.insertBefore(newElement, messageList.childNodes[0]);
}

var message = document.getElementById("message");
var submitBtn = document.getElementById("submitBtn");

// Push a new message into firebase
function pushNewMessageToFirebase(messageText) {
  console.log("Firebase: " + firebase)

  let messagesRef = firebase.database().ref("messages");
  messagesRef.push().set(messageText);
  //var firebaseRef = firebase.database().ref();
  //firebaseRef.child("message").set(messageText);

}

window.onload = function() {
  var messagesRef = firebase.database().ref("messages");
  messagesRef.on('child_added', function(data) {
    addNewMessageToPage(data.val());
  });
};
