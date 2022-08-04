/*
    - Objetivo: ALUNO NA FACULDADE
    - Autor: Leonardo Barbosa
    - Data: 04/08/2022
    - Versão: 1.0
*/
    
console.log('\n--- VERIFICAR SE O ALUNO(A) PASSOU NA FACULDADE --- \n')

const { exercico, calcularMedia } = require('./modulos/exercico.js')

var readline = require('readline')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno(a): \n', function (nomeAlun){
    let nome = nomeAlun

    entradaDados.question('Digite o nome do professor(a): \n', function(nomeProf){
        let prof = nomeProf

        entradaDados.question('Digite o sexo do aluno(a): \n', function(sexoAlun){
            let sexoA = sexoAlun

            if(sexoA == 'feminino'){
                sexoA = 'aluna'
            }else{
                sexoA = 'aluno'
            }

            entradaDados.question('Digite o sexo do professor(a): \n', function(sexoProf){
                let sexoP = sexoProf

            if(sexoP == 'feminino'){
                sexoP = 'professora'
            }else{
                sexoA = 'professor'
            }

                entradaDados.question('Digite o nome do curso: \n', function(curso){
                    let curs = curso

                    entradaDados.question('Digite o nome da disciplina: \n', function(disciplina){
                        let disc = disciplina

                        entradaDados.question('Entrar com valor da nota 1: \n', function(valor1){
                            let nota1 = valor1
                    
                        entradaDados.question('Entrar com o valor da nota 2: \n', function(valor2){
                            let nota2 = valor2
                    
                        entradaDados.question('Entrar com o valor da nota 3: \n', function(valor3){
                            let nota3 = valor3

                        entradaDados.question('Entrar com o valor da nota 4: \n', function(valor4){
                            let nota4 = valor4

                            console.log('Ola ' + sexoA + 'sua media eh ' + media)


                            entradaDados.close()

                            
                        })
                        })
                        })
                        })
                    })
                })
            })
        })
    })
})
