function changeText(parameter) {

  var newElement = document.createElement("p")
  newElement.id="newElement";
  newElement.innerHTML = document.getElementById('message').value;
  //document.body.appendChild(newElement);

  var lastMessage = document.getElementById('user_message');
  lastMessage.parentNode.insertAfter(newElement, lastMessage);

  parameter.preventDefault;

  //document.body.appendChild(parameter);

    //document.write(parameter);
    //id.innerHTML = "Ooops!";
}
