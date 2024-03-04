// Desafios - 02.Condicionais e concatenação 23/01/2024

// 1- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Qual o dia da semana?');

if(diaDaSemana == "sábado" || diaDaSemana == "domingo"){
    alert('Bom fim de semana!');
}else{
    alert('Boa semana!');
}


// 2- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número: ');

if(numero >= 0){
    alert('Número positivo.');
}else{
    alert('Número negativo.');
}


// 3- Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Digite uma pontuação: ');

if(pontuacao >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.');
}


// 4- Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 666.00;
alert('O saldo da conta é R$ ' +saldo);


// 5- Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite seu nome: ');

alert(`Boas vindas, ${nome}!`);


