const fs = require('fs');
//const { getEnvironmentData } = require('worker_threads');
fs.readFile('day4input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    let sum = 0
    let allPoints = []
    const regex = /[0-9]/g;
    for(let i = 0; i<input.length;i++){
        firstSplit = input[i].split(':');
        actualContent = firstSplit[1].split('|');
        console.log(actualContent[0] + '       ' + actualContent[1]);
        winningNumbers = actualContent[0].split(' ');
        numbersIHave = actualContent[1].split(' ');
        counter = 0;
        for(let j = 0; j<numbersIHave.length; j++){
            let isWinningNumber = false;
            for(let w = 0; w<winningNumbers.length;w++){
                //console.log('the winningnumbers [' + w + ']: ' + winningNumbers[w])
                //if(numbersIHave[j].includes(winningNumbers[w]) && winningNumbers[w].includes(numbersIHave[j]) && winningNumbers[w].match(regex)!=null){
                if(Number(numbersIHave[j]) == Number(winningNumbers[w]) && winningNumbers[w].match(regex)!=null){
                    isWinningNumber = true
                    console.log('Winningnumber' + winningNumbers[w] + 'found')
                }
            }
            if(isWinningNumber){
                counter = counter+1;
                isWinningNumber = false;
            }
        }
        if(counter > 0){
            console.log(calculatePoints(counter))
            allPoints.push(calculatePoints(counter));
        }
    }

    for(let c = 0; c<allPoints.length; c++){
        sum = sum + Number(allPoints[c])
    }
    console.log(sum)
    
    

});

function calculatePoints(amountWinningNumbers){
    if(amountWinningNumbers > 1){
        return calculatePoints(amountWinningNumbers-1)*2
    } else{
        return 1
    }
}