console.log('---CALCULADORA SIMPLES--- \n')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Informe o numero1: \n', function(valor1){
    let numero1 = parseFloat(valor1)

    entradaDados.question('Informe o numero2: \n', function(valor2){
        let numero2 = parseFloat(valor2)

        entradaDados.question('Informe a operacao a ser calculada: somar [+], subtrair [-], multiplicar [*] ou dividir [/] \n', function(opcao){
            let operacao = opcao.toUpperCase()

            let resultado

            if(operacao == 'SOMAR' || operacao == '+'){
                resultado = numero1 + numero2
            }else if(operacao == 'SUBTRAIR' || operacao == '-'){
                resultado = numero1 - numero2
            }else if(operacao == 'MULTIPLICAR' || operacao == '*'){
                resultado = numero1 * numero2
            }else if(operacao == 'DIVIDIR' || operacao == '/'){
                resultado = numero1 / numero2
            }
            console.log(resultado)

            entradaDados.close()
        })
    })
})