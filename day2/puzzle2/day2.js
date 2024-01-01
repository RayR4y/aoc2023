const fs = require('fs');
const { getEnvironmentData } = require('worker_threads');
fs.readFile('day2input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    let sum = 0
    for(let i = 0; i<input.length;i++){
        const regex = /[:]/g;
        const regex2 = /[;]/g;
        input[i] = input[i].replace(regex,',')
        input[i] = input[i].replace(regex2,',')
        revealedSets = input[i].split(',')
        let redcubesmin = 0
        let greencubesmin = 0
        let bluecubesmin = 0
        for(let r=0; r<revealedSets.length;r++){
           revealedSet = revealedSets[r].split(' ') 
           if(revealedSet[2]==='red' && revealedSet[1]>redcubesmin){
             redcubesmin = revealedSet[1] 
           }
           else{
            if(revealedSet[2]==='green' && revealedSet[1]>greencubesmin){
                greencubesmin = revealedSet[1]  
              }
              else{
                if(revealedSet[2]==='blue' && revealedSet[1]>bluecubesmin){
                    bluecubesmin = revealedSet[1] 
                  }
              }
           } 
           console.log('revealed set: ' + revealedSets[r])
        }
        console.log('minimum cubes: red - ' + redcubesmin + ',green - ' + greencubesmin + ',blue - ' + bluecubesmin)
        let power = redcubesmin * greencubesmin * bluecubesmin
        console.log(i)
        console.log(input[i])
        sum = sum + power
    }
    console.log(sum)
    
    

});