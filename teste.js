let obj = {
    'jogar#bola' : 'true',
}

let task = 'jogar volei';
let isTrue = true;

obj[task] = isTrue;

for(let key in obj){
    console.log(obj[key])
}

console.log(obj['jogar volei'])

