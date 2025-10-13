/*Desafios*/


/*1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/




function CalcularIMC(altura,peso){
    let imc = altura / (peso**2)
    return imc;
}


let altura = prompt ('Digite sua altura em metros:');
let peso = prompt ('Digite seu peso:');
CalcularIMC();

/*2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.*/



/*3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/

/*4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.*/

/*5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.*/


function areaCirculo(){
    let raio = prompt('Digite o valor do raio: ')
    let area = raio**2 * 3.14;
    console.log(area);
}

areaCirculo();

/*6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.*/

let n = 1;
let operador= '+';
let resultado;
let numeroDado = prompt
while (n<11){
    console.log(`| ${numeroDado} ${operador} ${n} = ${resultado}`)

}

function tabuada(){}

