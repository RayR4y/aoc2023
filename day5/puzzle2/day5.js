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
    actualNumbers = []
    ranges = []
    initialNumbers = []
    allFinalNums = []
    even = false
    console.log(seeds[0])
    for(let s = 1; s<seeds.length; s++){
        if(!even){
            initialNumbers.push(seeds[s])
        }
        else{
            ranges.push(seeds[s])
        }
        even = !even;
    }
    //console.log('initial Numbers:' + initialNumbers)
    //console.log('ranges:' + ranges)
    //console.log('actualNumbers' + actualNumbers)
    /*for(let n = 0; n<initialNumbers.length; n++){
        //console.log('ranges' + n + '= ' + ranges[n])
        for(let r = 0; r<Number(ranges[n]); r++){
            actualnum = Number(initialNumbers[n]) + r
            //console.log('new actual Number:' + actualnum)
            actualNumbers.push(Number(initialNumbers[n]) + r);
        }
    }*/
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
    valuesToDetermineMinOutputValue= []
    for(let d = 0; d<mappings.length; d++){
        for(let j = 0; j<mappings[d].length; j++){
            mappings[d][j] = mappings[d][j].split(' ')
            //mappings[d][j][0] = Number(mappings[d][j][0])
            valuesToDetermineMinOutputValue.push(mappings[d][j][0])
            //valuesToDetermineMax.push(mappings[d][j][1])
            //valuesToDetermineMax.push(mappings[d][j][2])
        }
        //console.log(mappings[d])
        //innerarray = mappings[d]
        //maxvalues.push(Math.max(...innerarray))
    }
    maxNeededOutput = Math.max(...ranges)
    minStartOfRange = Math.min(...initialNumbers)
    smallestOutputValue = Math.min(...valuesToDetermineMinOutputValue)
    if(smallestOutputValue<minStartOfRange){
        console.log('smallestOutputValue is smaller Than minStartOfRange')
        
    }
    else{
        console.log('smallestOutputValue is not smaller Than minStartOfRange')
    }
    //console.log('MaxNeededRange' + maxNeededRange)
/*for(let e = 0; e<initialNumbers.length;e++){
    actualNumbers.push(Number(initialNumbers[e]))
}*/
    maxNeededRange = maxNeededOutput-minStartOfRange;
for(let r = 0; r<maxNeededRange; r++){
    console.log('r:  ' + r + '  /  ' + maxNeededRange)
    //console.log('old actual Numbers:')
    //console.log(actualNumbers)
    for(let e = 0; e<initialNumbers.length;e++){
        if(Number(initialNumbers[e]) + Number(ranges[e]) > Number(initialNumbers[e])+r){
            actualNumbers[e] = Number(initialNumbers[e])+r;
        }
    }
    //console.log('new actual Numbers:')
    //console.log(actualNumbers)
    for(let i = 0; i<mappings.length; i++){
        //console.log(actualNumbers + ' ' + i)
        for(let a = 0; a<actualNumbers.length; a++){
            matchfound = false;
            //console.log(actualNumbers[a])
            actualNumbers[a] = Number(actualNumbers[a])
            for(let j = 0; j<mappings[i].length; j++){
                //console.log('Mappings ij:')
                //console.log(mappings[i][j])
                dataSet = mappings[i][j]
                if(matchfound == false){
                    //console.log('actualnum: ' + actualNumbers[a])
                    //console.log('dataSet[0]: ' + dataSet[0])
                    //console.log('dataSet[1]: ' + dataSet[1])
                    //console.log('dataSet[2]: ' + dataSet[2])
                    //console.log('dataSet:' + dataSet )
                    if(Number(actualNumbers[a]) >= Number(dataSet[1]) && Number(actualNumbers[a])<= (Number(dataSet[1]) + Number(dataSet[2]))){
                        matchfound = true;
                        //acutalNumbers[i] =  m[j][c][0] + (actualNumbers[i]-m[j][c][1)
                        //let newnum = Number(dataSet[0]) + (Number(actualNumbers[a]) - Number(dataSet[1]));
                        //console.log('newnum:' + newnum)
                        actualNumbers[a] = Number(dataSet[0]) + (Number(actualNumbers[a]) - Number(dataSet[1]))
                    }

                }
            }

        }
    }
    /*for(let a = 0; a<actualNumbers.length; a++){
        allFinalNums.push(actualNumbers[a])
    }*/
    allFinalNums.push(Math.min(...actualNumbers))
    }
    min = Math.min(...allFinalNums)
    console.log('min: ' + min)

    
    

});