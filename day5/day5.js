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
    actualNumbers = input[0].split(' ');
    counter = 0;
    for(let i = 3; i<input.length; i++){
        if(input[i].match(regex)!=null){
            mappings[counter].push(input[i])
        }
        else{
            if(input[i].match(regex2)==null){
                //console.log(mappings[counter])
                counter = counter+1 
            }
        }
    }

    for(let i = 0; i<mappings.length; i++){
        console.log(actualNumbers + ' ' + i)
        for(let a = 1; a<actualNumbers.length; a++){
            matchfound = false;
            console.log(actualNumbers[a])
            actualNumbers[a] = Number(actualNumbers[a])
            for(let j = 0; j<mappings[i].length; j++){
                console.log('Mappings ij:')
                console.log(mappings[i][j])
                dataSet = mappings[i][j].split(' ')
                if(matchfound == false){
                    console.log('actualnum: ' + actualNumbers[a])
                    console.log('dataSet[0]: ' + dataSet[0])
                    console.log('dataSet[1]: ' + dataSet[1])
                    console.log('dataSet[2]: ' + dataSet[2])
                    console.log('dataSet:' + dataSet )
                    if(Number(actualNumbers[a]) >= Number(dataSet[1]) && Number(actualNumbers[a])<= (Number(dataSet[1]) + Number(dataSet[2]))){
                        matchfound = true;
                        //acutalNumbers[i] =  m[j][c][0] + (actualNumbers[i]-m[j][c][1)
                        let newnum = Number(dataSet[0]) + (Number(actualNumbers[a]) - Number(dataSet[1]));
                        console.log('newnum:' + newnum)
                        actualNumbers[a] = Number(dataSet[0]) + (Number(actualNumbers[a]) - Number(dataSet[1]))
                    }

                }
            }

        }
    }
    allFinalnumbers = []
    for(let b = 1; b<actualNumbers.length;b++){
        allFinalnumbers.push(actualNumbers[b])
    }
    min = Math.min(...allFinalnumbers)
    console.log('min: ' + min)

    
    

});