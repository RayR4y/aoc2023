const fs = require('fs');
fs.readFile('day6input.txt', (err, data) => {
    if (err) throw err;
    const input = data.toString().split('\n')
    console.log(input)
    timestemp = input[0].split(' ')
    recordstemp = input[1].split(' ')
    console.log(recordstemp)
    times = []
    records = []
    amountOfwaystowin = []
    for(let i = 1; i<recordstemp.length; i++){
      if(recordstemp[i] != ''){
        records.push(Number(recordstemp[i]))
      }
    }
    for(let i = 1; i<timestemp.length; i++){
      if(timestemp[i] != ''){
        times.push(Number(timestemp[i]))
      }
    }
    console.log(times)
    console.log(records)
    for(let i = 0; i<times.length; i++){
      let counter = 0
      for(let j = 1; j<times[i]; j++){
        timebuttonhold = j;
        traveltime = times[i]-j
        result = timebuttonhold*traveltime;
        if(result>records[i]){
          counter = counter+1
        }
      }
      amountOfwaystowin.push(counter)
    }
    mul = 1;
    for(let i = 0; i<amountOfwaystowin.length; i++){
      mul = mul * amountOfwaystowin[i]
    }
    console.log(mul)
  });
