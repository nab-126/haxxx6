// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Dingus\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

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

