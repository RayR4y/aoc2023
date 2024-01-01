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
        let isPossible = true;
        for(let r=0; r<revealedSets.length;r++){
           revealedSet = revealedSets[r].split(' ') 
           if(revealedSet[2]==='red' && revealedSet[1]>12){
             isPossible = false;
             console.log('Is impossible because ' + revealedSet[1] + revealedSet[2] + 'cubes are more than 12')   
           }
           else{
            if(revealedSet[2]==='green' && revealedSet[1]>13){
                isPossible = false; 
                console.log('Is impossible because ' + revealedSet[1] + revealedSet[2] + 'cubes are more than 13')   
              }
              else{
                if(revealedSet[2]==='blue' && revealedSet[1]>14){
                    isPossible = false;  
                    console.log('Is impossible because ' + revealedSet[1] + revealedSet[2] + 'cubes are more than 14') 
                  }
              }
           } 
           console.log('revealed set: ' + revealedSets[r])
        }
        console.log(i)
        console.log(input[i])
        gamevaluefirstSplit = input[i].split(' ');
        console.log(gamevaluefirstSplit[1])
        let gamevalue = ''
        if(gamevaluefirstSplit.length>1){
            for(let g=0; g < gamevaluefirstSplit[1].length-1;g++){
                gamevalue = gamevalue + gamevaluefirstSplit[1].charAt(g)
            }
        }
        console.log('Gamevalue:' + gamevalue)
        if(isPossible){
            sum = sum + Number(gamevalue)
        }
    }
    console.log(sum)
    
    

});