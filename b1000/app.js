const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map(i=> +i);

function solution(a,b){
    return a+b;
}

console.log(solution(input[0],input[1]));