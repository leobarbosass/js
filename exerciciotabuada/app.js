/*
    - Objetivo: TABUADA DE 2 A 100
    - Autor: Leonardo Barbosa
    - Data: 11/08/2022
    - Versão: 1.0
*/
    
console.log('\n--- SISTEMA QUE CALCULA A TABUADA DE UM NUMERO --- \n')

const { tabuada, calcularTabuada } = require('./modulos/tabuada.js')

var readline = require('readline')
const { exit } = require('process')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o numero a ser calculado, de 2 a 100\n', function(numero1){
    let tabuada = numero1

    if( numero1 == ''){
        console.log('O campo deve ser prenchido')
        exit()
    }

    if (tabuada > 100) {
        console.log('Digite um numero de 2 a 100')
        exit()
    }else if(tabuada < 2){ 
        console.log('Digite um numero de 2 a 100')
        exit()
    }
    entradaDados.question('Digite outro numero a ser calculado, de 2 a 100\n', function(numero3){
        let tabuada3 = numero3
    
        if( numero3 == ''){
            console.log('O campo deve ser prenchido')
            exit()
        }
    
        if (tabuada3 > 100) {
            console.log('Digite um numero de 2 a 100')
            exit()
        }else if(tabuada3 < 2){ 
            console.log('Digite um numero de 2 a 100')
            exit()
        }

        entradaDados.question('Digite até que numero voce vai calcular\n', function(numero2){
            let tabuada2 = numero2

            if( numero2 == ''){
                console.log('O campo deve ser prenchido')
                exit()
            }


            calcularTabuada(tabuada, tabuada2, tabuada3)

            entradaDados.close()
        })
    })
})
