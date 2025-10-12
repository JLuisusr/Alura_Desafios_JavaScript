
let titulo = document.querySelector('h1');

titulo.innerHTML('Hora do Desafio');

function consoleClick(){
        console.log('O botão console foi clicado');

};

function alertClick(){
    alert('Eu amo JS');
};

function promptClick(){
    let cidade = prompt('Digite o nome de uma cidade:');
    alert(`Estive em ${cidade} e lembrei de você.`);

};

function somaClick(){
    let valor1=parseInt(prompt('Digite o primeiro número inteiro:'));
    let valor2= parseInt(prompt('Digite o segundo número inteiro:'));
    let resultado = valor1 + valor2;
    alert(`O valor da Soma de ${valor1} + ${valor2} é ${resultado}.`);
};