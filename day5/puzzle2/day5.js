const fs = require('fs');
const { pipeline } = require('stream');
const { SourceTextModule } = require('vm');
//const { getEnvironmentData } = require('worker_threads');
let mappingstateForPipeReverted = 6;
mappings = []
mappingskeytoRange = []
mappingsvaluetoRange = []
mappingsWithRevertedKeyValues = []
fs.readFile('day5input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    const regex = /[0-9]/g;
    const regex2 = /[a-z]/g;
    //mappings = [[],[],[],[],[],[],[]]
    //mappings = []
    //mappingskeytoRange = []
    //mappingsvaluetoRange = []
    //mappingsWithRevertedKeyValues = []

    seeds = input[0].split(' ');
    actualNumbers = []
    ranges = []
    initialNumbers = []
    allFinalNums = []
    even = false
    
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
    //console.log(input[3])
    counter = 0;
    mappings.push(new Map())
    mappingsWithRevertedKeyValues.push(new Map)
    mappingskeytoRange.push(new Map())
    mappingsvaluetoRange.push(new Map())
    for(let i = 3; i<input.length; i++){
        if(input[i].match(regex)!=null){
            splittedInput = input[i].split(' ')
                mappings[counter].set(Number(splittedInput[1]),Number(splittedInput[0]))
                mappingsWithRevertedKeyValues[counter].set(Number(splittedInput[0]),Number(splittedInput[1]))
                mappingskeytoRange[counter].set(Number(splittedInput[1]),Number(splittedInput[2]));
                mappingsvaluetoRange[counter].set(Number(splittedInput[0]),Number(splittedInput[2]));
            //mappings[counter].set('key','value')
        }
        else{
            if(input[i].match(regex2)==null && counter<7){
                mappings.push(new Map())  
                mappingsWithRevertedKeyValues.push(new Map)
                mappingskeytoRange.push(new Map())
                mappingsvaluetoRange.push(new Map())
                counter = counter+1 
            }
        }
    }
    console.log(mappings)

    /*console.log(getOrReturnValueIfNotInMapReverted(1))
    console.log(getOrReturnValueIfNotInMapReverted(2))
    console.log(getOrReturnValueIfNotInMapReverted(3))
    console.log(getOrReturnValueIfNotInMapReverted(4))
    console.log(getOrReturnValueIfNotInMapReverted(5))
    console.log(getOrReturnValueIfNotInMapReverted(6))
    console.log(getOrReturnValueIfNotInMapReverted(58))*/

    allOuputValuesOfMap7Reverted = mappingsWithRevertedKeyValues[6].keys();
    minOutputOfMap7 = Math.min(...allOuputValuesOfMap7Reverted)
    console.log(minOutputOfMap7)
    let inputForMinOutputOfMap7= pipe(
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
    //)(Number(minOutputOfMap7))
    )(58)
    for(let t = 0; t<initialNumbers.length; t++){
        if(inputForMinOutputOfMap7 >= initialNumbers[t] && inputForMinOutputOfMap7 <= initialNumbers[t]+ranges[t]){
            console.log(true)
        }
    }
    console.log('test:' + inputForMinOutputOfMap7)

    //prepare Mappings
    /*for(let d = 0; d<mappings.length; d++){
        for(let j = 0; j<mappings[d].length; j++){
            mappings[d][j] = mappings[d][j].split(' ')
        }
    }

    allOutputsOfMapping7 = []
    for(let j = 0; j<mappings[6].length; j++){
        allOutputsOfMapping7.push(mappings[6][j][0])
    }*/

    //minOutputValueOfStageSeven = Math.min(...allOutputsOfMapping7)
    //console.log(minOutputValueOfStageSeven)
    /*valuesToDetermineMinOutputValue= []
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
    /*maxNeededRange = maxNeededOutput-minStartOfRange;
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
    }
    allFinalNums.push(Math.min(...actualNumbers))
    }*/
    min = Math.min(...allFinalNums)
    console.log('min: ' + min)

    
    

});

function getOrReturnValueIfNotInMapReverted(actualValue){
    console.log('test123: ' + getInitialValueForThisValueTroughRange(actualValue, mappingsvaluetoRange[mappingstateForPipeReverted]))
    if(getInitialValueForThisValueTroughRange(actualValue, mappingsvaluetoRange[mappingstateForPipeReverted])[0]!= undefined){
        value = getInitialValueForThisValueTroughRange(actualValue, mappingsvaluetoRange[mappingstateForPipeReverted])[0]
        returnvalue = mappingsWithRevertedKeyValues[mappingstateForPipeReverted].get(value)
        console.log('Map: ' + mappingstateForPipeReverted + ' inputvalue -> returnvalue:' + value + ' -> ' + returnvalue)
        if(mappingstateForPipeReverted>0){
            setMappingStateForPipe(mappingstateForPipeReverted-1)
        }
        else{
            setMappingStateForPipe(6)
        }

        return returnvalue
    } else{
        value = actualValue;
        console.log('Map: ' + mappingstateForPipeReverted + ' inputvalue -> returnvalue:' + value + ' -> ' + value)
        if(mappingstateForPipeReverted>0){
            setMappingStateForPipe(mappingstateForPipeReverted-1)
        }
        else{
            setMappingStateForPipe(6)
        }
        return value;
    }
}

pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);


function setMappingStateForPipe(number){
    mappingstateForPipeReverted = number;
}

function getInitialValueForThisValueTroughRange(value, mapValuetoRange){
    keys = Array.from(mapValuetoRange.keys());
    let returnnumber;
    let returndiff;
    keys.forEach((key) => {
        if(Number(key)<=Number(value) && (Number(mapValuetoRange.get(key))+Number(key))>=Number(value)){
            console.log('found' + Number(key))
            returnnumber =  Number(key);
            returndiff = Number(value) - Number(key)
        }
      });
      return [returnnumber,returndiff]
}