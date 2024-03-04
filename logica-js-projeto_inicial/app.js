alert ('Boas vindas ao jogo do número secreto');

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

/*if(numeroSecreto == chute){
    console.log('Isso aí! Você descobriu o número secreto (5)')
}*/

// CONCATENAÇÃO:
// Template strings - usa a crase
if(numeroSecreto == chute){
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`)
}else{
    alert('Você errou :(')
}

// LIVE SERVER

let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);


