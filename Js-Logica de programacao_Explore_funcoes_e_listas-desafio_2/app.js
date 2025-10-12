/* Curso de Lógica de programação: explore funções e listas  */

/* Desafios 2.funções*/


/* 1.Criar uma função que exibe "Olá, mundo!" no console. */

function olaMundo(){
    console.log('Olá, Mundo!');
}
olaMundo();

/* 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. */

function olanome(nome){
    console.log(`Olá, ${nome}!`);
}

let nomeUsuario = prompt('Digite seu nome:');
olanome(nomeUsuario);

/* 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número. */

function dobroDoNumero(numero){
    return numero*2;
}

let numero = prompt('Digite um número: ');
let numeroDobrado = dobroDoNumero(numero);
console.log(`O dobro do número ${numero} é ${numeroDobrado}`);

/* 4.Criar uma função que recebe três números como parâmetros e retorna a média deles. */
function mediaTres(num1,num2,num3){
    let media = (num1 + num2 + num3 ) / 3;
    return media;
}

let numero1 = parseInt(prompt('Digite o Primeiro número: '));
let numero2 = parseInt(prompt('Digite o Segundo número: '));
let numero3 = parseInt(prompt('Digite o Terceiro número: '));

console.log(`A média dos três número é ${mediaTres(numero1,numero2,numero3)}`);


/* 5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles. */

function maiorDeles(num1,num2){
    return num1 > num2 ? num1 : num2; 
}
let valor1 = parseInt(prompt('Digite o Primeiro número: '));
let valor2 = parseInt(prompt('Digite o Segundo número: '));
let resultado = maiorDeles(valor1,valor2);
alert(`O maior número é ${resultado}`);


/* 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo. */
function potencia(x){
    return x*x;
}

let numerodapotencia = parseInt(prompt('Digite um número para saber o quadrado deste número: '));
let resultadopotencia = potencia(numerodapotencia);
alert(`O quadrado do número ${numerodapotencia} é ${resultadopotencia}.`);

/* Desafio concluído! Para honra e glória de Deus.*/










