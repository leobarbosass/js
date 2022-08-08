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

        return media
    }

}

const verificarAp =  function(media){
    if (media >= 70) {
        return 'aprovado'

    }else if (50 < media > 69) {
        return 'exame'

    }else{
        return 'reprovado'
    }
}

module.exports = {
    calcularMedia,
    verificarAp
}