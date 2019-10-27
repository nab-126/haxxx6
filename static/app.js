function getInput() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("chat").appendChild(node);
    reply("You are a lol")
}

function reply(msg) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(msg);
  node.appendChild(textnode);
  document.getElementById("chat").appendChild(node);
}
