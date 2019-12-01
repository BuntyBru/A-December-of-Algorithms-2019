let sevenishNum = (num) => {
    let power = 0;
    let answer = 0;
    let mem = new Array(num).fill(1);

    for(let i =1 ;i <num;i++)
    {
        if (answer == power)
        {
        answer = 0
        mem[i] = mem[power] * 7
     
        power = i
        }
      else{
        mem[i] = mem[power] + mem[answer]
        answer += 1
      }
    }
    console.log(power,answer,mem)
    return mem[mem.length-1];
}

console.log(sevenishNum(10));