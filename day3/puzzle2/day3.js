const fs = require('fs');
const { SourceTextModule } = require('vm');
const { getEnvironmentData } = require('worker_threads');
fs.readFile('day3input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    let sum = 0
    let nums = [];
    let multiplyPositions = []
    const regex = /[0-9]/g;

    for(let i = 0; i<input.length;i++){
        //console.log(input[i])
        for(let j = 0; j<input[i].length; j++){
            if(input[i].charAt(j)=='.'){
                nums.push(0)
            }
            if(input[i].charAt(j).match(regex)!=null){
                if(checkSurroundings(input,i,j) !=null){
                    a = 1;
                    while(input[i].charAt(j-a).match(regex)!=null){
                        a=a+1
                    }
                    num = ''
                    for(b = a-1; input[i].charAt(j-b).match(regex)!=null; b-- ){
                        num = num + input[i].charAt(j-b)
                    }
                    if(nums[nums.length-1]!=num){
                        //console.log(num)
                        nums.push(num) 
                        multiplyPositions.push(checkSurroundings(input,i,j))  
                    }
                    
                }
            }
        }
    }
    newnums = []
    for(let t = 0; t<nums.length; t++){
        if(nums[t]!=0){
            //console.log(nums[t])
            newnums.push(nums[t])
        }
        //sum = sum + Number(nums[t])
    }
    finalnums = []
    for(let i =0; i< newnums.length; i++){
        for(let j =0; j< newnums.length; j++){
            let comparestring1 = multiplyPositions[i][0] + multiplyPositions[i][1]
            let comparestring2 = multiplyPositions[j][0] + multiplyPositions[j][1]
            //console.log(comparestring1.includes(comparestring2))
            //console.log(multiplyPositions[i][0] == multiplyPositions[j][0] && multiplyPositions[i][1] == multiplyPositions[j][1])
            if(comparestring1.includes(comparestring2) && i!=j){
                console.log('newnumi' + i + ' ' + newnums[i])
                console.log('newnumj' + j + ' ' + newnums[j])
                console.log(multiplyPositions[i][0] + 'pos1 i and j' + multiplyPositions[j][0])
                console.log(multiplyPositions[i][1] + 'pos2 i and j' + multiplyPositions[j][1])
                //console.log('i' + newnums[i] + 'j' + newnums[j])
                finalnum = Number(newnums[i])*Number(newnums[j])
                if(finalnums.includes(finalnum)){
                    console.log('already includes num i ' + newnums[i] + ' and num j ' + newnums[j])
                }
                if(!finalnums.includes(finalnum)){
                    finalnums.push(finalnum)
                }
            }
        }
    }
    for(let n = 0; n<finalnums.length; n++){
        sum = sum + Number(finalnums[n])
    }
    console.log(sum)
    
    

});

function checkSurroundings(array, i,j){
    conditionOne = false;
    conditionTwo = false;
    conditionThree = false;
    conditionFour = false;
    conditionFive = false;
    conditionSix = false;
    conditionSeven = false;
    conditionEight = false;
    let returnarray = null;
    if(i>0 && j>0){
        conditionOne = array[i-1].charAt(j-1)=='*'
        if(conditionOne){
            returnarray = [[i-1],[j-1]]
        }
    }
    if(i>0){
        conditionTwo = array[i-1].charAt(j)=='*'
        if(conditionTwo){
        returnarray = [[i-1],[j]]
        }
    }
    if(i>0 && j<array[i].length-2){
        conditionThree = array[i-1].charAt(j+1)=='*'
        if(conditionThree){
            returnarray = [[i-1],[j+1]]
        }
    }
    if(j>0){
        conditionFour = array[i].charAt(j-1)=='*'
        if(conditionFour){
            returnarray = [[i],[j-1]]
        }
    }
    if(j<array[i].length-2){
        conditionFive = array[i].charAt(j+1)=='*'
        if(conditionFive){
            returnarray = [[i],[j+1]]
        }
    }
    if(i<array.length-1 && j>0){
        conditionSix = array[i+1].charAt(j-1)=='*'
        if(conditionSix){
            returnarray = [[i+1],[j-1]]
        }
    }
    if(i<array.length-1){
        conditionSeven = array[i+1].charAt(j)=='*'
        if(conditionSeven){
            returnarray = [[i+1],[j]]
        }
    }
    if(i<array.length-1 && j<array[i].length-2){
        conditionEight = array[i+1].charAt(j+1)=='*'
        if(conditionEight){
            returnarray = [[i+1],[j+1]]
        }
    }
    /*if(returnarray != []){
        return returnarray
    }
    else{
        return null
    }*/
    return returnarray;
    
}