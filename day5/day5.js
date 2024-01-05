const fs = require('fs');
//const { getEnvironmentData } = require('worker_threads');
fs.readFile('day5input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    const regex = /[0-9]/g;
    const regex2 = /[a-z]/g;
    mappings = [[],[],[],[],[],[],[]]
    seeds = input[0].split(' ');
    counter = 0;
    min = 0;
    for(let i = 3; i<input.length; i++){
        //console.log(mappings[counter])
        if(input[i].match(regex)!=null){
            //console.log(mappings[0])
            mappings[counter].push(input[i])
        }
        else{
            if(input[i].match(regex2)==null){
                console.log(mappings[counter])
                counter = counter+1 
            }
        }
    }

    for(let i = 0; i<7; i++){
        for(let j = 0; j<mappings[i].length; j++){
            console.log(mappings[i][j])
        }
    }

    
    

});