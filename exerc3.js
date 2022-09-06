// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
//============================================================================================================================================================================================

const fs = require('fs');

//Leitura do arquivo
let dados = fs.readFileSync('dados.json', 'utf-8');
//Converte JSON para Object do Javascript
let dadosObject = JSON.parse(dados);
console.log(dadosObject)

let soma=0;
let cont=0;
let max=0;

dadosObject.forEach(element => {
    if(element.valor !== 0){
        soma+= element.valor
        cont+= 1

        if(element.valor > max){
            max = element.valor
        }
    }      
})

let media = soma/cont;
let min=max;
let qtdFatAcimaMedia = 0;

dadosObject.forEach(element => {
    if(element.valor !== 0){        

        if(element.valor < min){
            min = element.valor
        }
        if(element.valor > media){
            qtdFatAcimaMedia+=1;
        }
    }  
    
})

// console.log(media);
console.log("O menor faturamento ocorrido no mês (considerando apenas dias com faturamento) foi "+ min);
console.log("O maior faturamento ocorrido no mês foi "+ max);
console.log("Considerando apenas dias com faturamento, houve "+qtdFatAcimaMedia+" dias com faturamento acima da média.");

