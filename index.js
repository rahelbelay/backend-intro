//use node's require()function 
// 
const fs = require('fs')
// filesystem (fs)

//argument vector 
// vector is array
//console.log(process.argv[2]);
const fileName = process.argv[2];
//console.log(fileName);
//error first callback
function printContent(error,buffer){
    if(error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
      }

}

fs.readFile(fileName,printContent);
//first argument is string
//second argument is function