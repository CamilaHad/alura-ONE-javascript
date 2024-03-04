// Desafios - 03.Condicionais e concatenação 24/01/2024

// 1- Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let loop = 1;

while(loop < 11){
    alert('Contagem ' + loop);
    loop++;
}


// 2- Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let cont = 10;

while(cont < 11 && cont >= 0){
    alert('Contagem regressiva (10): ' +cont);
    cont--;
}


// 3- Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroContagemRegressiva = prompt('Digite um número para contagem regressiva: ');
let contador = 0;

while(contador <= numeroContagemRegressiva){
    console.log('Contagem regressiva: ' +numeroContagemRegressiva);
    numeroContagemRegressiva--;
}


// 4- Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroContagemProgressiva = prompt('Digite um número para contagem progressiva: ');
let contador2 = 0;

while(contador2 <= numeroContagemProgressiva){
    console.log('Contagem progressiva: ' +numeroContagemProgressiva);
    numeroContagemProgressiva--;
}

