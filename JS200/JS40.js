const fs = require('fs');
let input = fs.readFileSync('./JS40.txt').toString().split('\n');

const limitarr = input[0].split(' ').map(i => +i);
const weightarr = input[1].split(' ').map(i=> +i);

/*
50 5
20 20 10 20 20
*/

const limit = limitarr[0];
const n = limitarr[1];
let count=0, sum=0;

for(const i of weightarr){
    sum += i;
    console.log(sum);
    if(sum <= limit){
        ++count;
    }  
}
console.log(count+'명 탈 수 있습니다.');

/*
prompt로 입력되는 수는 typeof 연산 해보면
알 수 있듯이, string 타입이다.
따라서 parseInt(prompt(),10); 으로 십진수 입력
받아야 함!
*/
