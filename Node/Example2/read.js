var fs = require('fs');
var myNumber = undefined;

function addOne(callback) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents);
        myNumber++;
        callback();
    })
}
console.log('Testing');
function logMyNumber() {
    console.log(myNumber);
}

addOne(logMyNumber);