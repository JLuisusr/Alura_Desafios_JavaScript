/*Desafios*/
while (true){

    let x = prompt('Escolha uma opção de 1 a 6:\n 1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.\n \n 2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.\n \n 3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.\n \n 4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.\n \n 5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.\n \n 6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.')
    if (x == 0){break}


    /*1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/
    else if (x == 1){
        function CalcularIMC(altura,peso){
            let imc = peso / (altura**2)
            return imc;
        }
        let altura = prompt ('Digite sua altura em metros:');
        let peso = prompt ('Digite seu peso:');
        console.log(CalcularIMC(altura,peso));
    }
    /*2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.*/
    else if (x == 2){
        function fatorial(){
        let numeroEntrada = prompt('Digite o número para calcular o fatorial: ');
        let resultadoParcial = 1;

        if ( numeroEntrada == 0 || numeroEntrada ==1){
            return 1;
        }

        else{
            for (i=2; i <=numeroEntrada; i++){
                resultadoParcial *= i;
            }
        }

        alert(`O fatorial de ${numeroEntrada} é igual a ${resultadoParcial}.`)
    } fatorial()
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
        let n = 0;
        let numeroDado = (prompt('Digite um número: '))
        numeroDado = +(numeroDado.replace(',','.'))
        console.log(`| Soma | | subtração | Multiplicação | Divisão |`);
        
        

        function  operacao(numeroDado,n){
            let operador = [' + ',' - ',' * ',' / '];
            let indice = parseInt(n/10);
            let resultado = numeroDado + operador[indice] + (n %= 10);
            console.log(n %= 10);
            return resultado;
        }      
        
        while (n<40){
            let resultadoOperacional = operacao(numeroDado,n)
            console.log(`| ${resultadoOperacional} = ${eval(resultadoOperacional).toFixed(2)}|`)
            n++; 
        }
    }

    else{alert('Opção invalida')}
}