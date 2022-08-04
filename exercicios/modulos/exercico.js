/*
    - Objetivo: ALUNO NA FACULDADE
    - Autor: Leonardo Barbosa
    - Data: 04/08/2022
    - Versão: 1.0
*/

const calcularMedia = function(nota1, nota2, nota3, nota4){
    let media 

    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('Os campos de notas devem ser prenchidos')

    }else{
        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4

        console.log('A media do aluno eh de: ' + media)
        
    }if (media > 70) {
        console.log('O usuario foi aprovado!')

    }else if (50 < media > 69) {
        console.log('O usuario esta em exame')

    }else{
        console.log('O usuario foi reprovado')
    }
}

module.exports = {
    calcularMedia
}