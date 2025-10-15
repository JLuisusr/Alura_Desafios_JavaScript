/*Desafios*/
while (true){
    let x = prompt('Escolha uma opção de 1 a 6:')
    if (x == 0){break}


    /*1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/
    else if (x == 1){
        function CalcularIMC(altura,peso){
            let imc = altura / (peso**2)
            return imc;
        }


        let altura = prompt ('Digite sua altura em metros:');
        let peso = prompt ('Digite seu peso:');
        CalcularIMC();
    }
    /*2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.*/
    else if (x == 2){
        let numeroEntrada = prompt('Digite o número para calcular o fatorial: ');
        let numeroAntecessor = numeroEntrada - 1;
        let resultadoParcial = numeroEntrada;

        function funcaoFatorial(numero,resultadoParcial){
            let resultado = numero*resultadoParcial;
            return resultado;
        }

        while (numeroAntecessor > 1){
            resultadoParcial = funcaoFatorial(numeroAntecessor,resultadoParcial);
            numeroAntecessor --;
        }

        alert(`O fatorial de ${numeroEntrada} é igual a ${resultadoParcial}.`)

    }
    /*3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/
    else if (x == 3){
        while (true){
            let valorDola = prompt('Digite o valor em dola para converter em reais, ou 0 para sair:')
            if (valorDola != 0) {
                let valorReais = valorDola*4.8;
                alert(`O valor em Reais é ${parseFloat(valorReais)}`)    
            }
            else{
                alert('Até a próxima!');
                break;
            }
        }
    }

    /*4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.*/
    else if (x == 4){
        let largura = 10;
        let comprimento = 20;
        function areaRetangulo(largura,comprimento){
            let area = largura*comprimento;
            alert(area);
            let perímetro = largura*2 + comprimento*2;
            alert(perímetro);
        }

        areaRetangulo(largura,comprimento);

    }

    /*5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.*/
    else if (x == 5){
        function areaCirculo(){
            let raio = prompt('Digite o valor do raio: ')
            let area = raio**2 * 3.14;
            console.log(area);
        }
        areaCirculo();
    }

    /*6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.*/
    else if (x == 6){
        let n = 1;
        let operador= '+';
        let resultado = n + numeroDado;

        let numeroDado = prompt('Digite um número: ')
        while (n<11){
            console.log(`| ${numeroDado} ${operador} ${n} = ${resultado}`)
            n++;
        }

        function tabuada(){}
    }

    else{alert('Opção invalida')}
}