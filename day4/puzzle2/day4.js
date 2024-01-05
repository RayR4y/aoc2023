const fs = require('fs');
//const { getEnvironmentData } = require('worker_threads');
fs.readFile('day4input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n');
    //console.log(input)
    let sum = 0
    let allPoints = []
    let countCards = []
    for(let i = 0; i<input.length;i++){
        countCards.push(0);
    }
    const regex = /[0-9]/g;
    for(let i = 0; i<input.length;i++){
        countCards[i] = countCards[i] + 1;
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
            for(let c = i+1;c<i+1+counter && c<countCards.length;c++){
                countCards[c] = countCards[c] + countCards[i];
            }
        }
    }

    for(let c = 0; c<countCards.length; c++){
        sum = sum + Number(countCards[c])
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