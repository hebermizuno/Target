// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamento = [
    {"estado":"SP", "faturamento" : 67836.43},
    {"estado":"RJ", "faturamento" : 36678.66},
    {"estado":"MG", "faturamento" : 29229.88},
    {"estado":"ES", "faturamento" : 27165.48},
    {"estado":"Outros", "faturamento" : 19849.53},
]

let soma = 0;

faturamento.forEach(element => {
    soma+= element.faturamento
})

function arredondar(n) {
    return (n * 100).toFixed(2);
}

for(let element of faturamento){
    element["percentual"] = element.faturamento/soma;
    console.log(element.estado + " teve participação percentual de "+ arredondar(element.percentual)+"%")
}

// console.log(faturamento);

