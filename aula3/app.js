console.log('---CALCULADORA SIMPLES--- \n')

//import da biblioteca de entrada de dados
var readline = require('readline')

//instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada do valor1 ( parse para tirar de String e colocar em float)
entradaDados.question('Informe o numero1: \n', function(valor1){
    let numero1 = parseFloat(valor1)

    entradaDados.question('Informe o numero2: \n', function(valor2){
        let numero2 = parseFloat(valor2)

        //VERIFICA E INFORMA O TIPO DE DADOS DA VARIAVEL
        //console.log(typeof(numero1)) ---> NUMBER
        //console.log(typeof(valor1))  ---> STRING

        entradaDados.question('Informe a operacao a ser calculada: somar [+], subtrair [-], multiplicar [*] ou dividir [/] \n', function(opcao){
            //DECLARANDO A VARIAVEL QUE VAI RECEBER O TIPO DE OPERACAO MATEMATICA E CONVERTENDO O TEXTO DIGITADO EM MAIUSCULO
            //toUpperCase() -> converte em MAIUSCULO
            //toLowerCase() -> converte em minusculo
            let operacao = opcao.toUpperCase()

            //VARIAVEL PARA AS OPERACOES
            let resultado

            if(operacao == 'SOMAR' || operacao == '+'){
                resultado = numero1 + numero2
            }else if(operacao == 'SUBTRAIR' || operacao == '-'){
                resultado = numero1 - numero2
            }else if(operacao == 'MULTIPLICAR' || operacao == '*'){
                resultado = numero1 * numero2
            }else if(operacao == 'DIVIDIR' || operacao == '/'){
                resultado = numero1 / numero2
            }else{
                resultado = 'ERRO: Nao foi escolhida a operacao matematica \n'
            }

            console.log(resultado)

            entradaDados.close()
        })
    })
})