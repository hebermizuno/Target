let stringFromUser = 'abacaxi';
let newStringFromUser = '';

for(let i=stringFromUser.length-1; i>=0; i = i-1){
    newStringFromUser += stringFromUser[i];
}
console.log(newStringFromUser);