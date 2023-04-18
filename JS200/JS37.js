/*
const votes = prompt('투표입력').split(' ');
const map = new Map();

for(const i of votes){
    map.has(i) 
    ? map.set(i,map.get(i)+1)
    : map.set(i,1)
}
이렇게 하면 반장선거 map으로 만들수 있당
*/


const votes = prompt('투표입력').split(' ');
const result = {};
let winner = '';

for(let i in votes){
    let value = votes[i];
    
    result[value] = 
    result[value] === undefined
    ? 1 
    : result[value]+1 ;
}

winner = Object.keys(result).reduce((a,b)=>{
    return result[a] > result[b] ? a : b ;
})

console.log(winner+'가 반장('+result[winner]+'표)');