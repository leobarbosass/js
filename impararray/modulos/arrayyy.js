const impar = function(valor1, valor2){
    let numero1 = valor1
    let numero2 = valor2
    const imp = []

    for(numero1; numero1 <=numero2; numero1 ++){
        if(numero1 % 2 !=0){

            imp.push(numero1)
        }
    }
    return imp
}


const par = function(valor1, valor2){
    let numero1 = valor1
    let numero2 = valor2
    const pares = []

    for(numero1; numero1 <=numero2; numero1 ++){
        if(numero1 % 2 ==0){

            pares.push(numero1)
        }
    }
    return pares
}


const paresImpares = function(pares, imp){
    const mostrarTela = [
        imp,
        pares
    ]
    return mostrarTela
}

module.exports = {
    paresImpares,
    par,
    impar
}