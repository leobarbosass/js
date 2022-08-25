/*
    - Objetivo: VERIFICAR SE NUMERO É IMPAR OU PAR
    - Autor: Leonardo Barbosa
    - Data: 25/08/2022
    - Versão: 1.0
*/
    
console.log('\n--- VERIFICAR SE NUMERO É IMPAR OU PAR --- \n')

const {paresImpares, par, impar, arrayyy} = require('./modulos/arrayyy.js')

var readline = require('readline')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

    entradaDados.question('Digite o valor incial\n', function(valor1){
        numero1 = parseFloat(valor1)

        entradaDados.question('Digite o valor final\n', function(valor2){
            numero2 = parseFloat(valor2)

            let numeroPar = par(numero1, numero2)
            let numeroImpar = impar(numero1, numero2)
            let mostrarTela = paresImpares(numeroPar, numeroImpar)

            console.log(mostrarTela)

            entradaDados.close()
        })
    })