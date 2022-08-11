/*
    - Objetivo: TABUADA DE 2 A 100
    - Autor: Leonardo Barbosa
    - Data: 11/08/2022
    - Versão: 1.0
*/


const calcularTabuada = function(numero1, numero2){
    let tabuada = numero1
    let cont = 0
    let resultado
    let tabuada2 = numero2

        console.log('\n--- CALCULAR TABUADA --- \n')
            while(cont <= tabuada2){

                resultado = tabuada * cont
                console.log(tabuada + ' x ' + cont + ' = ' + resultado)
                cont = cont + 1
            }
        }


module.exports = {
    calcularTabuada
}