const fs = require('fs');
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
        for(let r=0; r<revealedSets.length;r++){
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
        sum = sum + Number(gamevalue)
    }
    console.log(sum)
    
    

});