//const stream = new ReadableStream("day1input.txt");
//const fileReader = new FileReader()
const fs = require('fs');
fs.readFile('day1input.txt', (err, data) => {
    if (err) throw err;
   
    console.log(data.toString());
  });

//function readfile(){
    //const text = FileReader.readAsText("day1input.txt")
    //console.log(text);
//}
