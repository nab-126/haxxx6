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

<<<<<<< HEAD
function getInput(e) {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);     
    document.getElementById("chat").appendChild(node);
    // return input
=======



var spawn = require('child_process').spawn,
py    = spawn('python', ['random_output.py']),
data = [1,2,3,4,5,6,7,8,9],
dataString = '';

function respond(input) {

}

function getInput() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    return input
>>>>>>> fe2660e4dc9043e6b5e5862810dfd7ecb99ccfdc
}



<<<<<<< HEAD
// var input = document.getElementById("input");
// input.addEventListener("keypress", getInput);

// function bot() { 
//     var input = document.getElementById("input").value;
//     console.log(input);

//     if (questionNum == 0) {
//     output.innerHTML = '<h1>hello ' + input + '</h1>';// output response
//     document.getElementById("input").value = "";   		// clear text box
//     question = '<h1>how old are you?</h1>';			    	// load next question		
//     setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
//     }

//     else if (questionNum == 1) {
//     output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
//     document.getElementById("input").value = "";   
//     question = '<h1>where are you from?</h1>';					      	
//     setTimeout(timedQuestion, 2000);
//     }   
// }

// function timedQuestion() {
//     output.innerHTML = question;
// }

//push enter key (using jquery), to run bot function.
// $(document).keypress(function(e) {
//   if (e.which == 13) {
//     alert("ENTER")
//   }
// });




// $(document).keyup(function(e) {
//   if($(".input").is(":focus") && event.key == "Enter"){
//     var x = getInput();
//     alert(x);
//   }
// });
=======

//start.js
var spawn = require('child_process').spawn,
    py    = spawn('python', ['compute_input.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();
>>>>>>> fe2660e4dc9043e6b5e5862810dfd7ecb99ccfdc
