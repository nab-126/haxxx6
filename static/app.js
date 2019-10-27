function getInput() {
    var input = document.getElementById("input").value;
    if (input == "") {
        input = "Go bears lol"
    }
    document.getElementById("input").value = "";
    var node = document.createElement("LI");
    node.className = "borderLeft";
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("chat").appendChild(node);
    getBotResponse(input);
    scrollBy(0, 250)
}

function reply(msg) {
    var node = document.createElement("LI");
    node.className = "borderRight";
    var textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    document.getElementById("chat").appendChild(node);
}



function getBotResponse(rawText) {
    $.post("/post", { msg: rawText },
        function (data) {
            reply(data)
        }
        // 'json',
        ).error(function() { alert("error"); });
}
