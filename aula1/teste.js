//exibe uma mensagem no promt
console.log("Testando o node")

//import da biblioteca para interacao com o usuario
var readline = require('readline')

//instancia do objeto para entrada e saida de dados via prompt
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Coloca uma mensagem no prompt para o usuario e o que for digitado 
//eh enviado atraves de uma funcao de call back
entradaDados.question("Digite seu nome:  \n",  function (nome) {

    console.log("Bem-vindo, "+nome+".")
})