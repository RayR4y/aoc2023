const fs = require('fs');
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
                        console.log(num)
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
            if(multiplyPositions[i]==multiplyPositions[j]){
                finalnum = Number(newnums[i])*Number(newnums[j])
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
        conditionOne = array[i-1].charAt(j-1)=='*'
        returnarray = [i-1,j-1]
        if(conditionOne){
            return returnarray
        }
    }
    if(i>0){
        conditionTwo = array[i-1].charAt(j)=='*'
    }
    if(i>0 && j<array[i].length-2){
        conditionThree = array[i-1].charAt(j+1)=='*'
    }
    if(j>0){
        conditionFour = array[i].charAt(j-1)=='*'
    }
    if(j<array[i].length-2){
        conditionFive = array[i].charAt(j+1)=='*'
    }
    if(i<array.length-1 && j>0){
        conditionSix = array[i+1].charAt(j-1)=='*'
    }
    if(i<array.length-1){
        conditionSeven = array[i+1].charAt(j)=='*'
    }
    if(i<array.length-1 && j<array[i].length-2){
        console.log(array.length)
        console.log(array[i].length)
        console.log(i)
        console.log(j)
        conditionEight = array[i+1].charAt(j+1)=='*'
    } //790 3 5 und 8 => alle j+1 conditions sind true
    
}