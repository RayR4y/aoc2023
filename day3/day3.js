const fs = require('fs');
const { getEnvironmentData } = require('worker_threads');
fs.readFile('day3input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    let sum = 0
    const regex = /[1-9]/g;
    for(let i = 0; i<input.length;i++){
        //console.log(input[i])
        for(let j = 0; j<input[i].length; j++){
            /*if(input[i].charAt(j)!='.' && input[i].charAt(j).match(regex)==null){
                //console.log(input[i].charAt(j))
                if(input[i].charAt(j-1).match(regex)!=null){
                    let a = 1
                    while(input[i].charAt(j-a).match(regex)!=null){
                        a=a+1
                    } //in untermethoden auslagern
                } //umdrehen, umkreis der Zahl checken, weil sonst zahl doppelt gerechnet werden kann
            }*/
            if(input[i].charAt(j).match(regex)!=null){
                //checkSurroundings(input,i,j);
            }
        }
    }
    checkSurroundings()
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
    if(i>0 && j>0){
        conditionOne = input[i-1].charAt(j-1)!='.' && input[i-1].charAt(j-1).match(regex)==null
    }
    if(i>0){
        conditionTwo = input[i-1].charAt(j)!='.' && input[i-1].charAt(j).match(regex)==null 
    }
    if(i>0 && j<array[i].length-1){
        conditionThree = input[i-1].charAt(j+1)!='.' && input[i-1].charAt(j+1).match(regex)==null
    }
    if(j>0){
        conditionFour = input[i].charAt(j-1)!='.' && input[i].charAt(j-1).match(regex)==null
    }
    if(j<array[i].length-1){
        conditionFive = input[i].charAt(j+1)!='.' && input[i].charAt(j+1).match(regex)==null
    }
    if(i<array.length-1 && j>0){
        conditionSix = input[i+1].charAt(j-1)!='.' && input[i+1].charAt(j-1).match(regex)==null 
    }
    if(i<array.length-1){
        conditionSeven = input[i+1].charAt(j)!='.' && input[i+1].charAt(j).match(regex)==null
    }
    if(i<array.length-1 && j<array[i].length-1){
        conditionEight = input[i+1].charAt(j+1)!='.' && input[i+1].charAt(j+1).match(regex)==null
    }
    if(conditionOne || conditionTwo || conditionThree || conditionFour || conditionFive || conditionSix || conditionSeven || conditionEight){
        return true;
    }
    else{
        return false;
    }
}