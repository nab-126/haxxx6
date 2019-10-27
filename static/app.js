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





function getBotResponse() {
  var input = $("#input").val();
  var inputHtml = '<p class="userText"><span>' + input + "</span></p>";
  $("#input").val("");
  $("#ouput").append(inputHtml);

  document
    .getElementById("input")
    .scrollIntoView({ block: "start", behavior: "smooth" });
  $.get("/get", { mssg: input }).done(function(data) {
    var botHtml = '<p class="botText"><span>' + data + "</span></p>";
    $("#chatbox").append(botHtml);
    document
      .getElementById("userInput")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });
}
$("#input").keypress(function(e) {
  if (e.which == 13) {
    getBotResponse();
  }
});
