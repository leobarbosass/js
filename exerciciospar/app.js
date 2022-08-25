/*
    - Objetivo: VERIFICAR SE NUMERO É IMPAR OU PAR
    - Autor: Leonardo Barbosa
    - Data: 11/08/2022
    - Versão: 1.0
*/
    
console.log('\n--- VERIFICAR SE NUMERO É IMPAR OU PAR --- \n')

const {impar, imPar } = require('./modulos/impar.js')

var readline = require('readline')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

    entradaDados.question('Digite o valor incial\n', function(valor1){
        numero1 = valor1

        entradaDados.question('Digite o valor final\n', function(valor2){
            numero2 = valor2

        })
    })