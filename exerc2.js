// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
//============================================================================================================================================================================================

// >>>>>>>>> Informar o número a ser verificado, na linha abaixo:
let numberInputUser = 34; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let fibonacci = [0];

//Gera a sequência de fibo até chegar em um elemento que seja maior ou igual ao que o usuário quer verificar.
while(fibonacci[fibonacci.length-1] < numberInputUser){
    if(fibonacci.length < 2){
        fibonacci.push(1)
    }
    else {
        let nextElement = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2];
        fibonacci.push(nextElement);
    }
}

//Se o elemento estiver no array com a sequência de fibonacci, então retorna o próprio elemento, senão retorna undefined
if (fibonacci.find(element => element === numberInputUser) != undefined){
    console.log("O número " + numberInputUser + " é um elemento da sequência de Fibonacci.")
} else {
    console.log("O número " + numberInputUser + " NÃO é um elemento da sequência de Fibonacci.")
}