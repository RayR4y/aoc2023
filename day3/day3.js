const fs = require('fs');
const { getEnvironmentData } = require('worker_threads');
fs.readFile('day3input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    let sum = 0
    let nums = [];
    const regex = /[0-9]/g;

    for(let i = 0; i<input.length;i++){
        //console.log(input[i])
        for(let j = 0; j<input[i].length; j++){
            if(input[i].charAt(j)=='.'){
                nums.push(0)
            }
            if(input[i].charAt(j).match(regex)!=null){
                if(checkSurroundings(input,i,j) == true){
                    a = 1;
                    while(input[i].charAt(j-a).match(regex)!=null){
                        a=a+1
                    }
                    num = ''
                    for(b = a-1; input[i].charAt(j-b).match(regex)!=null; b-- ){
                        num = num + input[i].charAt(j-b)
                    }
                    if(nums[nums.length-1]!=num){
                        nums.push(num)   
                    }
                }
            }
        }
    }
    for(let t = 0; t<nums.length; t++){
        if(nums[t]!=0){
            console.log(nums[t])
        }
        sum = sum + Number(nums[t])
    }
    console.log(sum)
    
    

});

function checkSurroundings(array, i,j){
    const regex = /[0-9]/g;
    conditionOne = false;
    conditionTwo = false;
    conditionThree = false;
    conditionFour = false;
    conditionFive = false;
    conditionSix = false;
    conditionSeven = false;
    conditionEight = false;
    if(i>0 && j>0){
        conditionOne = array[i-1].charAt(j-1)!='.' && array[i-1].charAt(j-1).match(regex)==null
    }
    if(i>0){
        conditionTwo = array[i-1].charAt(j)!='.' && array[i-1].charAt(j).match(regex)==null 
    }
    if(i>0 && j<array[i].length-1){
        conditionThree = array[i-1].charAt(j+1)!='.' && array[i-1].charAt(j+1).match(regex)==null
    }
    if(j>0){
        conditionFour = array[i].charAt(j-1)!='.' && array[i].charAt(j-1).match(regex)==null
    }
    if(j<array[i].length-1){
        conditionFive = array[i].charAt(j+1)!='.' && array[i].charAt(j+1).match(regex)==null
    }
    if(i<array.length-1 && j>0){
        conditionSix = array[i+1].charAt(j-1)!='.' && array[i+1].charAt(j-1).match(regex)==null 
    }
    if(i<array.length-1){
        conditionSeven = array[i+1].charAt(j)!='.' && array[i+1].charAt(j).match(regex)==null
    }
    if(i<array.length-1 && j<array[i].length-1){
        conditionEight = array[i+1].charAt(j+1)!='.' && array[i+1].charAt(j+1).match(regex)==null
    }
    if(conditionOne || conditionTwo || conditionThree || conditionFour || conditionFive || conditionSix || conditionSeven || conditionEight){
        return true;
    }
    else{
        return false;
    }
}