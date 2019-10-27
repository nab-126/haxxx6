var questionNum = 0;                                // keep count of question, used for IF condition.
var output = document.getElementById('output');		// store id="output" in output variable


function getInput() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    writeResponse(input);
}

function writeResponse(input) {
    var ans = 'hi';
    document.getElementById('output').innerHTML = ans;
}