/*
    - Objetivo: CRIACAO DE FUNCOES PARA CALCULAR UMA TABUADA
    - Autor: Leonardo Barbosa
    - Data: 04/08/2022
    - Versão: 1.0
*/

const calcularTabuada = function(numero1){

    let tabuada = numero1
    let resultado
    let cont = 0

    //While
        console.log('\n--- Testando O WHILE --- \n')
        while(cont <= 10){

            resultado = tabuada * cont
            console.log(tabuada + ' x ' + cont + ' = ' + resultado)
            cont = cont + 1
            //cont +=1
            //cont ++
        }

    //For
        console.log('\n--- Testando O FOR --- \n')
        for(cont = 0; cont <=10; cont ++){

            resultado = tabuada * cont
            console.log(tabuada + ' x ' + cont + ' = ' + resultado)
        }
}

//calcularTabuada(2) SO PRA TESTAR NO BACK
//chamar a funcao ( o numero é o numero da tabuada)

//exportar para o app.js
module.exports = {
    calcularTabuada
}