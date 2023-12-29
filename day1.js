//const stream = new ReadableStream("day1input.txt");
//const fileReader = new FileReader()
const stringnumbers = ['one','two']
const fs = require('fs');
let actualStringnumber
fs.readFile('day1input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    let sum = 0;
    for(let i = 0; i<input.length; i++){
            const capturingRegex = /(?<number>one|two)/;
            console.log(capturingRegex + input[i])
            const foundStringnums = input[i].match(capturingRegex);
            if(foundStringnums != null){
                actualStringnumber = foundStringnums[0]
                let test = stringnumbers.find((s) => s === actualStringnumber);
                console.log('found' + test)
            }
            //input[i] = input[i].replace(capturingRegex, stringnumbers.indexOf(stringnumbers.find(checkNumRegex())))
            console.log(capturingRegex + input[i])
            const regex = /[1-9]/g;
            const found = input[i].match(regex);
            if(found!= null){
                const num = found[0] + found[found.length-1]
                console.log(num)
                sum = sum + Number(num)
                //console.log(Number(num)+1)
            }
            
    }
    console.log(sum)
    //console.log(input[2].match(regex));
  });

  function checkNumRegex(value){
    return actualStringnumber === value
  }

//function readfile(){
    //const text = FileReader.readAsText("day1input.txt")
    //console.log(text);
//}
