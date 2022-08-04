/*
    - Objetivo: Aplicar estruturas de repeticao (while e FOR)
    - Autor: Leonardo Barbosa
    - Data: 04/08/2022
    - Versão: 1.0
*/
    
    console.log('\n--- TABUADA ONLINE --- \n')

    //importar o tabuada.js
    const { calcularTabuada } = require('./modulos/tabuada.js')

    //Import da biblioteca de entrada de dados
    var readline = require('readline')


    //Instancia do objeto entradaDados
    var entradaDados = readline.createInterface({

        input: process.stdin,
        output: process.stdout
    })

    entradaDados.question('Digite a tabuada a ser calculada: \n', function(numero){
        let tabuada = numero
        calcularTabuada(tabuada)

        entradaDados.close()
    })