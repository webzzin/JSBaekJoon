//BJ 4344 평균은 넘겠지
//미리 input이 어떤 form으로 도착하는 것이 좋을지 적어본다
/* 입력
C
{N: arr:},{N: arr:},...{N: arr:} C개

5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './BJ4344.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
const inputC = +input[0];
const inputTestCase = [];

for(let i=1; i<=inputC; ++i){
    
    const arr = input[i].split(' ').map(i=>+i);
    
    const newArr = [];
    for(let i=1; i<= arr[0]; i++){
        newArr.push(arr[i]);
    }
    
    const testcase = {
        N: arr[0],  
        arr: newArr
    };
    console.log(testcase);
    inputTestCase.push(testcase);
}

//해결 function
function solution(C,testcase) {
    console.log('C:',C);
    console.log('testcase: ',testcase);

    //여기에서 문제 풀면됨

}

solution(inputC, inputTestCase);