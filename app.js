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


var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>what is your name?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function getInput() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    return "LMAO"

}

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


$(document).keyup(function(e) {
  if($(".input").is(":focus") && event.key == "Enter"){
    var x = getInput();
    alert(x);
  }
});