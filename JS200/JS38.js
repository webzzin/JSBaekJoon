const arr = prompt('점수입력').split(' ')
.map((a)=>parseInt(a,10));

arr.sort((a,b)=> a-b); //오름차순

const maxarr = [];
let count = 0;

while(maxarr.length<3){
    let val = arr.pop(); //가장큰점수
    count++; //pop되는 수 (학생수)

    if(!maxarr.includes(val)) 
        maxarr.push(val);
        //max top 3 점수표에 없으면 넣기
}

console.log(count);

/*객체를 이용한 풀이*/
const array = prompt('점수입력').split(' ');
const obj = {};

for(let i in array){
    let score=array[i];
    obj[score] = obj[score] === undefined ? 
    1 : obj[score]+1
}

const arrayKeys= Object.keys(obj)
.sort((a,b)=>b-a); //내림차순

let sum=0;
for(let i=0; i<3; i++){
    sum += obj[arrayKeys[i]]
}