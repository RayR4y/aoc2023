const fs = require('fs');
const { pipeline } = require('stream');
const { SourceTextModule } = require('vm');
//const { getEnvironmentData } = require('worker_threads');
let mappingstateForPipeReverted = 6;
let amountMappingsUsedForReverted = 7;
let counterForMappingAmountFlexibilityForReverted = 0;
let mappingstateForPipe = 6;
let amountMappingsUsed = 7;
let counterForMappingAmountFlexibility = 0;
temptestarray = []
testtesttest = []
allParamsForRecursion = []
tempStorageFinalAreasForRecursion = []
tempStorageInputAreasForRecursion = []
tempStorageFinalAreas = []
tempStorageInputAreas = []
mappings = []
mappingskeytoRange = []
mappingsvaluetoRange = []
mappingsWithRevertedKeyValues = []
arrayForSavingMinOutputOfMap7 = []
mappingInitialNumberToRange = new Map()
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

    for(let s = 0; s<initialNumbers.length; s++){
        mappingInitialNumberToRange.set(Number(initialNumbers[s]),Number(ranges[s]))
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
    //hier schleife drum, je in schleife für das jeweilige mapping niedrigsten möglichen output bestimmen,
    //vorwärts zu 7 rechnen und in array speichern. dann alle arraywerte + niedrigsten input durch alle 7 
    //vergleichen und niedrigstes ist finaler wert
    allPossibleMinValues = [];
    isPossibleInput = false;
    for(let f = mappings.length; f>0; f--){
    	//statt f resetten while schleife
        console.log('f:' + f)
    //let allOuputValuesOfMapFReverted = Array.from(mappingsWithRevertedKeyValues[f-1].keys());
    //for(let g = 0; g<allOuputValuesOfMapFReverted.length; g++){
    //    console.log(g + ' ' + allOuputValuesOfMapFReverted[g])
    //}
    //test für ob es Lücken zwischen den Wertebereichen gibt (key or max)
    let allInputValuesOfMapF = Array.from(mappings[f-1].keys());
    let minValuesOfInbetweenSpaces = [];
    for(let g = 0; g<allInputValuesOfMapF.length; g++){
        testvalue = Number(allInputValuesOfMapF[g]) + Number(mappingskeytoRange[f-1].get(allInputValuesOfMapF[g]));
        if(mappings[f-1].get(testvalue)==undefined && allInputValuesOfMapF[g]!=Math.max(...allInputValuesOfMapF)){
            console.log('es gibt zwischenwerte nach: ' + allInputValuesOfMapF[g])
            minValuesOfInbetweenSpaces.push(testvalue)
        }
    }
    let possibleInputOfInbetweenValue = false
    while(!possibleInputOfInbetweenValue){
    minValueOfInbetweenSpaces = Math.min(...minValuesOfInbetweenSpaces)
    setAmountMappingsUsedAndPrepareForReverted(f);
    let inputForMinInbetweenValueOfMapF= pipe(
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
    )(Number(minValueOfInbetweenSpaces))
    possibleInputOfInbetweenValue = false
    setAmountMappingsUsedAndPrepare(7,0)
    let ouputForMinInbetweenValueOfMapF= pipe(
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
    )(Number(inputForMinInbetweenValueOfMapF))
    for(let t = 0; t<initialNumbers.length; t++){
        test123 = Number(initialNumbers[t])+Number(ranges[t]);
        console.log('initalNumbers[' + t + ']: ' + initialNumbers[t])
        console.log('initialNum+Range = ' + test123)
        if(inputForMinInbetweenValueOfMapF>= initialNumbers[t] && inputForMinInbetweenValueOfMapF< Number(initialNumbers[t])+Number(ranges[t])){
            possibleInputOfInbetweenValue = true;
            console.log(inputForMinInbetweenValueOfMapF+ 'is a possible input')
            allPossibleMinValues.push(ouputForMinInbetweenValueOfMapF);
        }
    }
    if(!possibleInputOfInbetweenValue){
        console.log('is not a possible input')
        minValuesOfInbetweenSpaces.splice(minValuesOfInbetweenSpaces.indexOf(ouputForMinInbetweenValueOfMapF),1)
        if(minValuesOfInbetweenSpaces.length == 0){
            possibleInputOfInbetweenValue = true;
        }
    }
    }
    let allOuputValuesOfMapFReverted = Array.from(mappingsWithRevertedKeyValues[f-1].keys());
    console.log('jump here' + f)
    isPossibleInput = false;
    firstrunThrough7 =  true;
    while(!isPossibleInput){
        for(let g = 0; g<allOuputValuesOfMapFReverted.length; g++){
            console.log(g + ' ' + allOuputValuesOfMapFReverted[g])
        }
        minOutputOfMapFReverted = Math.min(...allOuputValuesOfMapFReverted)
        if(f==7 && firstrunThrough7){
            minOutputOfMap7 = minOutputOfMapFReverted;
            //inputToMap7ForMinOutput = mappingsWithRevertedKeyValues[6].get(minOutputOfMap7)
            firstrunThrough7 = false;
        }
        console.log('minimum: ' + minOutputOfMapFReverted)
        console.log(minOutputOfMapFReverted)
        setAmountMappingsUsedAndPrepareForReverted(f);
        let inputForMinOutputOfMapF= pipe(
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
        )(Number(minOutputOfMapFReverted))
        isPossibleInput = false;
        setAmountMappingsUsedAndPrepare(7,0)
        let minOutputOfMapF= pipe(
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
        )(Number(inputForMinOutputOfMapF))
        for(let t = 0; t<initialNumbers.length; t++){
            test123 = Number(initialNumbers[t])+Number(ranges[t]);
            console.log('initalNumbers[' + t + ']: ' + initialNumbers[t])
            console.log('initialNum+Range = ' + test123)
            if(inputForMinOutputOfMapF >= initialNumbers[t] && inputForMinOutputOfMapF < Number(initialNumbers[t])+Number(ranges[t])){
                isPossibleInput = true;
                console.log(inputForMinOutputOfMapF + 'is a possible input')
                allPossibleMinValues.push(minOutputOfMapF);
            }
        }
        if(!isPossibleInput){
            console.log('is not a possible input')
            allOuputValuesOfMapFReverted.splice(allOuputValuesOfMapFReverted.indexOf(minOutputOfMapF),1)
            if(allOuputValuesOfMapFReverted.length == 0){
                isPossibleInput = true;
            }
        }
    }
    isPossibleInput = false;
    
    }
    //minOutputOfMap7 = minOutputOfMapF;
    //inputToMap7ForMinOutput = mappingsWithRevertedKeyValues[6].get(minOutputOfMap7)
    let possibleInputForMinOutputOfMap7 = false
    inputForminOutputOfMap7 = mappingsWithRevertedKeyValues[6].get(minOutputOfMap7)
    testnum = Number(minOutputOfMap7) + Number(mappingsvaluetoRange[6].get(minOutputOfMap7))-1
    console.log('Test narrowDownRanges')
    allNarrowedDownRanges = new Map()
    allNarrowedDownRanges.set(0,[minOutputOfMap7,testnum])
    //(indexOfUpperMapping, startValueOfUpperMappingInput, endValueOfUpperMappingInput, startValueOfUpperMappingOutput, endValueOfUpperMappingOutput, arrayToExtend)
    narrowDownRanges(6, inputForminOutputOfMap7,0,minOutputOfMap7,0,[allNarrowedDownRanges.get(0)],0)
    console.log('Bugfixing123:')
    console.log(allParamsForRecursion)
    console.log(tempStorageFinalAreasForRecursion)
    console.log(tempStorageInputAreasForRecursion)
    //function narrowDownRanges(indexOfUpperMapping, startValueOfUpperMappingInput, endValueOfUpperMappingInput, startValueOfUpperMappingOutput, endValueOfUpperMappingOutput, arrayToExtend, recursionIndex){
    initArrayToExtend = []
    console.log('the code gets here')
    /*while(true){
        console.log(Number(allParamsForRecursion[0][0])-1)
    }*/
    for(let v = 0; v<7-Number(allParamsForRecursion[0][0]); v++){
        initArrayToExtend.push([])
    }
    for(let z = 0; z<tempStorageFinalAreasForRecursion.length; z++){
        console.log('Bugfixing124:')
        initArrayToExtend.push([tempStorageFinalAreasForRecursion[z][0],tempStorageFinalAreasForRecursion[z][1]])
        narrowDownRanges(Number(allParamsForRecursion[0][0])-1,tempStorageInputAreasForRecursion[z][0],tempStorageInputAreasForRecursion[z][1],tempStorageFinalAreasForRecursion[z][0],tempStorageFinalAreasForRecursion[z][1],initArrayToExtend,allParamsForRecursion[0][1])
    }    
    /*for(let w = minOutputOfMap7; w<(Number(minOutputOfMap7) + Number(mappingsvaluetoRange[6].get(minOutputOfMap7))); w++){
        console.log(w + '  /  ' + testnum)
        setAmountMappingsUsedAndPrepareForReverted(7);
        let inputForMinOutputOfMap7= pipe(
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
            getOrReturnValueIfNotInMapReverted,
        )(Number(w))
        temporaryArrayForInitialInputNumbers = []
        for(let t = 0; t<initialNumbers.length; t++){
            test123 = Number(initialNumbers[t])+Number(ranges[t]);
            //console.log('initalNumbers[' + t + ']: ' + initialNumbers[t])
            //console.log('initialNum+Range = ' + test123)
            if(inputForMinOutputOfMap7 >= initialNumbers[t] && inputForMinOutputOfMap7 < Number(initialNumbers[t])+Number(ranges[t])){
                possibleInputForMinOutputOfMap7 = true;
                console.log(inputForMinOutputOfMap7 + 'is a possible input')
                allPossibleMinValues.push(minOutputOfMap7);
            }
            if(possibleInputForMinOutputOfMap7){
                w = (Number(minOutputOfMap7) + Number(mapValuetoRange[6].get(minOutputOfMap7)))
            }
            /*if(initialNumbers[t]> inputForMinOutputOfMap7){
                temporaryArrayForInitialInputNumbers.push(initialNumbers[t])
            }
        }
        /*minNumOutOfInitialTempArray = Math.min(...temporaryArrayForInitialInputNumbers);
        setAmountMappingsUsedAndPrepare(7,0)
        let minOutputOfminNumOutOfInitialTempArray= pipe(
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
        )(Number(minNumOutOfInitialTempArray))
        testvariable123 = minOutputOfminNumOutOfInitialTempArray-1
        console.log('w changed to:' +  testvariable123)
        w = minOutputOfminNumOutOfInitialTempArray-1;
    }*/


    minInitialInput = Math.min(...initialNumbers);
    setAmountMappingsUsedAndPrepare(7,0)
        let ouputForminInitialInput= pipe(
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
            getOrReturnValueIfNotInMap,
        )(Number(minInitialInput))
    allPossibleMinValues.push(ouputForminInitialInput);
    console.log('all values in allPossibleMinValues:')
    for(let k = 0; k<allPossibleMinValues.length; k++){
        console.log(allPossibleMinValues[k])
    }
    


    /*allOuputValuesOfMap7Reverted = Array.from(mappingsWithRevertedKeyValues[6].keys());
    minOutputOfMap7 = Math.min(...allOuputValuesOfMap7Reverted)
    console.log(minOutputOfMap7)
    setAmountMappingsUsedAndPrepare(7);
    let inputForMinOutputOfMap7= pipe(
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
        getOrReturnValueIfNotInMapReverted,
    //)(Number(minOutputOfMap7))
    )(minOutputOfMap7)
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
    min = Math.min(...allPossibleMinValues)
    console.log('min: ' + min)

    
    

});

function getOrReturnValueIfNotInMapReverted(actualValue){
    if(counterForMappingAmountFlexibilityForReverted < amountMappingsUsedForReverted){
        counterForMappingAmountFlexibilityForReverted = counterForMappingAmountFlexibilityForReverted+1;
        console.log('test123: ' + getInitialValueForThisValueTroughRange(actualValue, mappingsvaluetoRange[mappingstateForPipeReverted]))
        if(getInitialValueForThisValueTroughRange(actualValue, mappingsvaluetoRange[mappingstateForPipeReverted])[0]!= undefined){
            value = getInitialValueForThisValueTroughRange(actualValue, mappingsvaluetoRange[mappingstateForPipeReverted])[0]
            returnvalue = Number(mappingsWithRevertedKeyValues[mappingstateForPipeReverted].get(value)) + (Number(actualValue) - Number(value))
            console.log('Map: ' + mappingstateForPipeReverted + ' Rev: inputvalue -> returnvalue:' + actualValue + ' -> ' + returnvalue)
            if(mappingstateForPipeReverted>0){
                setMappingStateForPipeReverted(mappingstateForPipeReverted-1)
            }
            else{
                setMappingStateForPipeReverted(amountMappingsUsedForReverted-1)
            }

            return returnvalue
        } else{
            value = actualValue;
            console.log('Map: ' + mappingstateForPipeReverted + ' Rev: inputvalue -> returnvalue:' + value + ' -> ' + value)
            if(mappingstateForPipeReverted>0){
                setMappingStateForPipeReverted(mappingstateForPipeReverted-1)
            }
            else{
                setMappingStateForPipeReverted(amountMappingsUsedForReverted-1)
            }
            return value;
        }
    }
    else{
        return actualValue;
    }
}

function getOrReturnValueIfNotInMap(actualValue){
    if(counterForMappingAmountFlexibility < amountMappingsUsed){
        counterForMappingAmountFlexibility = counterForMappingAmountFlexibility+1;
        console.log('test123: ' + getInitialValueForThisValueTroughRange(actualValue, mappingskeytoRange[mappingstateForPipe]))
        if(getInitialValueForThisValueTroughRange(actualValue, mappingskeytoRange[mappingstateForPipe])[0]!= undefined){ 
            value = getInitialValueForThisValueTroughRange(actualValue, mappingskeytoRange[mappingstateForPipe])[0]
            returnvalue = Number(mappings[mappingstateForPipe].get(value)) + (Number(actualValue) - Number(value))
            console.log('Map: ' + mappingstateForPipe + ' inputvalue -> returnvalue:' + actualValue + ' -> ' + returnvalue)
            if(mappingstateForPipe<6){
                setMappingStateForPipe(mappingstateForPipe+1)
            }
            else{
                setMappingStateForPipe(0)
            }

            return returnvalue
        } else{
            value = actualValue;
            console.log('Map: ' + mappingstateForPipe + ' inputvalue -> returnvalue:' + value + ' -> ' + value)
            if(mappingstateForPipe<6){
                setMappingStateForPipe(mappingstateForPipe+1)
            }
            else{
                setMappingStateForPipe(0)
            }
            return value;
        }
    }
    else{
        return actualValue;
    }
}

pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);


function setMappingStateForPipeReverted(number){
    mappingstateForPipeReverted = number;
}

function setMappingStateForPipe(number){
    mappingstateForPipe = number;
}

function getInitialValueForThisValueTroughRange(value, mapValuetoRange){
    keys = Array.from(mapValuetoRange.keys());
    let returnnumber;
    let returndiff;
    keys.forEach((key) => {
        if(Number(key)<=Number(value) && (Number(mapValuetoRange.get(key))+Number(key))>Number(value)){
            console.log('found' + Number(key))
            returnnumber =  Number(key);
            returndiff = Number(value) - Number(key)
            console.log('returnnumber: ' + returnnumber + ' returndiff: ' + returndiff)
        }
      });
      /*if(returnnumber == undefined){
        return [value, 0]
      }*/
      return [returnnumber,returndiff]
}

function setAmountMappingsUsedAndPrepareForReverted(newAmount){
    amountMappingsUsedForReverted = newAmount;
    mappingstateForPipeReverted = newAmount-1;
    counterForMappingAmountFlexibilityForReverted = 0;
}

function setAmountMappingsUsedAndPrepare(newAmount, startFromMapping){
    amountMappingsUsed = newAmount;
    mappingstateForPipe = startFromMapping;
    counterForMappingAmountFlexibility = 0;
}

allArrayCombinationsOfNarrowedDownRanges = []
//Neuer Ansatz für Prüfen des Niedrigsten Output-Wertbereiches von Mapping7:
//Methode die Alle Bereiche aus dem jeweils niedrigeren Mapping raussucht, die OutputWerte enthalten, welche jeweils als input beim Oberen Mapping
//den gewünschten Output ergeben, und von diesen Bereichen nur die Output Werteunterbereiche nimmt, die im höheren Mapping den gewünschten
//output ergeben und in ein Array der Form [[],[],[],[],[],[],[]] in das Array des ersten Index speichert (als Anfang Teilbereich, Ende Teilbereich).
//für jeden Bereich wird ein eigenes Array erstellt und die Methode wird für jeden Bereich nochmal rekursiv aufgerufen und das Array mitgegeben
//Wenn das letzte Mapping das Obere Mapping der Methode ist, wird in den Inputbereichen geprüft, begonnen bei dem "Zweig" des Arraybaums der vom 
//aller obersten Mapping den niedrigsten Wert hat, ob der dazu passende Inputbereich existiert -> wenn ja wird der entsprechende "Zweig"
//seperat abgespeichert. Prüfung der anderen zweige wird dann durch überall while mit if condition boolean und boolean ändern abgebrochen. 
//Dann wird durch vergleichen von unterstem bereich mit dem darüber der bereich darüber jeweils bis zum Obersten bereich auf den mit dem untersten
//input möglichen Bereich verkleinert. der verkleinerte Endoutput bereich wird dann vom kleinsten Wert aus nach vorhandenseins des
//initialen inputwertes geprüft und der erste Wert der zurückgegeben wird wird in Array mit Minimumwerten zum vergleich gespeichert.
//Idee: statt für jeden Bereich ein eigenes Array zu erstellen Werte alle Pro Ebene in einem Array und dazu Matrix für Zusammenhang?
//Baumstruktur aus Java auch anders in Java Script nachbaubar? -> verschachtelte Maps

//end und range des Uppermappings müssen für später rekursion und Teilbereiche mitgegeben werden!
function narrowDownRanges(indexOfUpperMapping, startValueOfUpperMappingInput, endValueOfUpperMappingInput, startValueOfUpperMappingOutput, endValueOfUpperMappingOutput, arrayToExtend, recursionIndex){
    if(indexOfUpperMapping>0){
        if(indexOfUpperMapping==6){
            console.log('index is 6!')
            endOfUpperMappingOutput = Number(startValueOfUpperMappingOutput) + Number(mappingsvaluetoRange[indexOfUpperMapping].get(startValueOfUpperMappingOutput))-1
            endOfUpperMappingInput = Number(startValueOfUpperMappingInput) + Number(mappingskeytoRange[indexOfUpperMapping].get(startValueOfUpperMappingInput))-1 
        }else{
            endOfUpperMappingOutput = endValueOfUpperMappingOutput
            endOfUpperMappingInput = endValueOfUpperMappingInput
        }
        //test
        console.log(mappingsWithRevertedKeyValues[Number(indexOfUpperMapping)-1])
        //test
        console.log('startOfUpperMappingOutput:' + startValueOfUpperMappingOutput)
        console.log('endOfUpperMappingOutput:' + endOfUpperMappingOutput)
        console.log('startOfUpperMappingInput:' + startValueOfUpperMappingInput)
        console.log('endOfUpperMappingInput:' + endOfUpperMappingInput)
        allLowerMappingAreaStarts = Array.from(mappingsWithRevertedKeyValues[Number(indexOfUpperMapping)-1].keys())
        console.log('before sort:')
        console.log(allLowerMappingAreaStarts)
        for(let i = 0; i<allLowerMappingAreaStarts.length; i++){
            allLowerMappingAreaStarts[i] = Number(allLowerMappingAreaStarts[i])
        }
        allLowerMappingAreaStarts.sort(function(a, b){return a-b})
        console.log('after sort:')
        console.log(allLowerMappingAreaStarts)
        allLowerMappingAreaEnds = []
        allLowerMappingAreaInputStartValues = []
        allLowerMappingAreaInputEndValues = []
        for(let i = 0; i<allLowerMappingAreaStarts.length; i++){
            allLowerMappingAreaEnds.push(Number(mappingsvaluetoRange[Number(indexOfUpperMapping)-1].get(allLowerMappingAreaStarts[i])) + allLowerMappingAreaStarts[i]-1)
            inputStartValue = Number(mappingsWithRevertedKeyValues[Number(indexOfUpperMapping)-1].get(allLowerMappingAreaStarts[i]))
            allLowerMappingAreaInputStartValues.push(inputStartValue)
            allLowerMappingAreaInputEndValues.push(inputStartValue -1 + Number(mappingskeytoRange[Number(indexOfUpperMapping)-1].get(inputStartValue)))
        }
        for(let i = 0; i<allLowerMappingAreaStarts.length; i++){
            console.log('startOutp, endOutp, startinp, endInp')
            console.log(allLowerMappingAreaStarts[i])
            console.log(allLowerMappingAreaEnds[i])
            console.log(allLowerMappingAreaInputStartValues[i])
            console.log(allLowerMappingAreaInputEndValues[i])
        }
        areas = []
        for(let i = 0; i<allLowerMappingAreaStarts.length; i++){
            condition1 = allLowerMappingAreaStarts[i]>= startValueOfUpperMappingInput && allLowerMappingAreaStarts[i]<= endOfUpperMappingInput;
            condition2 = allLowerMappingAreaEnds[i] >= startValueOfUpperMappingInput && allLowerMappingAreaStarts[i]<= endOfUpperMappingInput;
            //debugging
            if(allLowerMappingAreaStarts[i]==1494154584){
                console.log(condition1)
                console.log(condition2)
                console.log('condition1 visualised:')
                console.log(allLowerMappingAreaStarts[i] + ' >= ' + startValueOfUpperMappingInput + ' && ' + allLowerMappingAreaStarts[i] + ' <= ' + endOfUpperMappingInput)
                console.log('condition2 visualised:')
                console.log(allLowerMappingAreaEnds[i] + ' >= ' + startValueOfUpperMappingInput + ' && ' + allLowerMappingAreaStarts[i] + ' <= ' + endOfUpperMappingInput)
            }
            /*console.log('condtition1:')
            if()
            console.log(condition1)
            console.log('condtition2:')
            console.log(condition2)
            console.log('or:')
            console.log(condition1 || condition2)*/
            if(condition1 || condition2){
                console.log(true)
                areas.push([allLowerMappingAreaStarts[i],allLowerMappingAreaEnds[i]])
            }
        }
        console.log(areas)
        finalareas = []
        for(let l = 0; l<areas.length; l++){
            if(areas[l][0]<startValueOfUpperMappingInput){
                areas[l][0] = startValueOfUpperMappingInput
            }
            if(areas[l][1]>endOfUpperMappingInput){
                areas[l][1] = endOfUpperMappingInput
            }
        }
        console.log(areas)
        if(areas.length == 0){
            finalareas.push([startValueOfUpperMappingInput,endOfUpperMappingInput])
        }
        else{
            if(areas[0][0] != startValueOfUpperMappingInput){
                finalareas.push([startValueOfUpperMappingInput,areas[0][0]-1])
            }
            finalareas.push(areas[0])
            if(areas.length >1){
                for(let l = 1; l<areas.length; l++){
                    if(areas[l-1][1]==areas[l][0]-1){
                        finalareas.push(areas[l])
                    }
                    else{
                        finalareas.push([areas[l-1][1]+1,areas[l][0]-1])
                        finalareas.push(areas[l])
                    }
                }
            }
            if(areas[areas.length-1][1] != endOfUpperMappingInput){
                finalareas.push([areas[areas.length-1][1]+1,endOfUpperMappingInput])
            }
        }
        inputareas = []
        for(let i = 0; i<finalareas.length; i++){
            if(getInitialValueForThisValueTroughRange(finalareas[i][0],mappingsvaluetoRange[indexOfUpperMapping-1])[0]!=undefined){
                initialValueArray = getInitialValueForThisValueTroughRange(finalareas[i][0],mappingsvaluetoRange[indexOfUpperMapping-1])
                diffStartEnd = Number(finalareas[i][1]) - Number(finalareas[i][0])
                valueOne = Number(mappingsWithRevertedKeyValues[indexOfUpperMapping-1].get(initialValueArray[0])) + Number(initialValueArray[1])
                valueTwo = valueOne + diffStartEnd
                inputareas.push([valueOne,valueTwo])
            }
            else{
                inputareas.push(finalareas[i])
            }
        }
        console.log(finalareas)
        console.log('areasref und inputareas:')
        console.log(areas)
        console.log(inputareas)
        testarray1 = [[1,2],[3,4]]
        testarray2 = []
        for(let t = 0; t<testarray1.length; t++){
            testarray2.push(testarray1[t])
        }
        testarray2.push([5,6])
        console.log('testarrays')
        console.log(testarray1)
        console.log(testarray2)
        console.log(finalareas.length)
        temptestarray.push(finalareas.length)
        tempStorageFinalAreas.push(finalareas)
        tempStorageInputAreas.push(inputareas)
        if(finalareas.length>1){
            for(let y = 0; y<finalareas.length; y++){
                tempStorageFinalAreasForRecursion.push(finalareas[y])
                tempStorageInputAreasForRecursion.push(inputareas[y])
            }
            allParamsForRecursion.push([indexOfUpperMapping,recursionIndex])
        }
        //for(let i = 0; i<temptestarray[recursionIndex]; i++){
        for(let i = 0; i<1; i++){
            extendedArray = []
            for(let j = 0; j<arrayToExtend.length;j++){
                extendedArray.push(arrayToExtend[j])
            }
            extendedArray.push(tempStorageFinalAreas[recursionIndex][i])
            console.log('finalareaslength is:' + finalareas.length)
            console.log('extendedArrayOf: ' + i)
            console.log(extendedArray)
            console.log('inputareas:')
            console.log(inputareas)
            console.log('finalareas:')
            console.log(finalareas)
            console.log('finalareas in storage:')
            console.log(tempStorageFinalAreas)
            console.log(recursionIndex)
            console.log(tempStorageFinalAreas[recursionIndex])
            console.log(tempStorageInputAreas[recursionIndex][i][0])
            console.log(tempStorageFinalAreas[recursionIndex][i][0])
            //indexOfUpperMapping, startValueOfUpperMappingInput, startValueOfUpperMappingOutput,
            console.log('NarrowDownRangesRecursionhasStarted:')
            console.log('(indexOfUpperMapping, startValueOfUpperMappingInput, endValueOfUpperMappingInput, startValueOfUpperMappingOutput, endValueOfUpperMappingOutput, arrayToExtend, recursionIndex)')
            console.log(indexOfUpperMapping-1 + ' , ' + tempStorageInputAreas[recursionIndex][i][0] + ' , ' + tempStorageInputAreas[recursionIndex][i][1] + ' , ' + tempStorageFinalAreas[recursionIndex][i][0] + ' , ' + tempStorageFinalAreas[recursionIndex][i][1] + ' , ' + extendedArray + ' , ' + recursionIndex+1)
            narrowDownRanges(indexOfUpperMapping-1, tempStorageInputAreas[recursionIndex][i][0], tempStorageInputAreas[recursionIndex][i][1], tempStorageFinalAreas[recursionIndex][i][0],tempStorageFinalAreas[recursionIndex][i][1], extendedArray, recursionIndex+1)
            console.log('finalareaslength is at end:' + finalareas.length)
            console.log('temptestarray is at end:' + temptestarray.length)
        }
    }
    else{
        console.log('index Of Uppermapping is 0')
        //endOfUpperMappingOutput = Number(startValueOfUpperMappingOutput) + Number(mappingsvaluetoRange[indexOfUpperMapping].get(startValueOfUpperMappingOutput))-1
        //endOfUpperMappingInput = Number(startValueOfUpperMappingInput) + Number(mappingskeytoRange[indexOfUpperMapping].get(startValueOfUpperMappingInput))-1 
        console.log(arrayToExtend)
        startValueFromArrayToExtend = Number(arrayToExtend[6][0]) 
        endValueFromArrayToExtend = Number(arrayToExtend[6][1])
        console.log(getInitialValueForThisValueTroughRange(startValueFromArrayToExtend,mappingsvaluetoRange[0]))
        initialValueAndDiff = getInitialValueForThisValueTroughRange(startValueFromArrayToExtend,mappingsvaluetoRange[0]);
        startValueInputOfMapping0 = mappingsWithRevertedKeyValues[0].get(Number(initialValueAndDiff[0])) + Number(initialValueAndDiff[1])
        endValueInputOfMapping0 = startValueInputOfMapping0 + (endValueFromArrayToExtend - startValueFromArrayToExtend)      //mappingsvaluetoRange[0].get(Number(initialValueAndDiff[0])) - Number(initialValueAndDiff[1])
        console.log(startValueInputOfMapping0)
        console.log(endValueInputOfMapping0)
        console.log(endValueInputOfMapping0-startValueInputOfMapping0)
        console.log(initialNumbers)
        sortedinitialNumbers = []
        for(let r = 0; r<initialNumbers.length; r++){
            sortedinitialNumbers.push(Number(initialNumbers[r]))
        }
        sortedinitialNumbers.sort(function(a, b){return a-b})
        console.log(sortedinitialNumbers)
        console.log(initialNumbers)
        for(let u = 0; u<sortedinitialNumbers.length; u++){
            console.log('sortedInitialNumber: ' + u)
            if(sortedinitialNumbers[u]>=startValueInputOfMapping0 && sortedinitialNumbers[u]<=endValueInputOfMapping0){
                //return in
                console.log('Der finale Input ist (initialValue): ' + sortedinitialNumbers[u])
                testtesttest.push(sortedinitialNumbers[u])
                //return processValue(sortedinitialNumbers[i])
            }
            if(sortedinitialNumbers[u] -1 + Number(mappingInitialNumberToRange.get(sortedinitialNumbers[u]))>=startValueInputOfMapping0 && sortedinitialNumbers[u]<=endValueInputOfMapping0){
                //return startval
                console.log('Der finale Input ist (startvalue): ' + startValueInputOfMapping0)
                testtesttest.push(startValueInputOfMapping0)
                //return processValue(startValueInputOfMapping0)
            }
        }
        console.log('Nichts passt')
        console.log(testtesttest)
        if(testtesttest.length!=0){
            valueToPush = processValue(testtesttest[0])
            allPossibleMinValues.push(valueToPush)
        }
        
    }

}

function processValue(value){
    setAmountMappingsUsedAndPrepare(7,0)
    let output= pipe(
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
        getOrReturnValueIfNotInMap,
    )(Number(value))
    console.log('Der finale Output ist:' + output)
}