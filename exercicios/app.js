/*
    - Objetivo: ALUNO NA FACULDADE
    - Autor: Leonardo Barbosa
    - Data: 04/08/2022
    - Versão: 1.0
*/
    
console.log('\n--- VERIFICAR SE O ALUNO(A) PASSOU NA FACULDADE --- \n')

const { exercico, calcularMedia, verificarAp } = require('./modulos/exercico.js')

var readline = require('readline')
const { exit } = require('process')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno(a): \n', function (nomeAlun){
    let nome = nomeAlun

    if( nomeAlun == ''){
        console.log('O campo deve ser prenchido')
        exit()
    }

    entradaDados.question('Digite o nome do professor(a): \n', function(nomeProf){
        let prof = nomeProf

        if( nomeProf == ''){
            console.log('O campo deve ser prenchido')
            exit()
        }

        entradaDados.question('Digite o sexo do aluno(a): \n', function(sexoAlun){
            let sexoA = sexoAlun

            if( sexoAlun == ''){
                console.log('O campo deve ser prenchido')
                exit()
            }

            if(sexoA == 'feminino'){
                sexoA = 'A aluna'
            }else{
                sexoA = 'O aluno'
            }

            entradaDados.question('Digite o sexo do professor(a): \n', function(sexoProf){
                let sexoP = sexoProf

                if( sexoProf == ''){
                    console.log('O campo deve ser prenchido')
                    exit()
                }

                if(sexoP == 'feminino'){
                    sexoP = 'A professora'
                }else{
                    sexoP = 'O professor'
                }

                entradaDados.question('Digite o nome do curso: \n', function(curso){
                    let curs = curso

                    if( curso == ''){
                        console.log('O campo deve ser prenchido')
                        exit()
                    }
                    
                    entradaDados.question('Digite o nome da disciplina: \n', function(disciplina){
                        let disc = disciplina

                        if( disciplina == ''){
                            console.log('O campo deve ser prenchido')
                            exit()
                        }

                        entradaDados.question('Entrar com valor da nota 1: \n', function(valor1){
                            let nota1 = valor1
                    
                            if( valor1 == ''){
                                console.log('O campo deve ser prenchido')
                                exit()
                            }

                        entradaDados.question('Entrar com o valor da nota 2: \n', function(valor2){
                            let nota2 = valor2
                            
                            if( valor2 == ''){
                                console.log('O campo deve ser prenchido')
                                exit()
                            }

                        entradaDados.question('Entrar com o valor da nota 3: \n', function(valor3){
                            let nota3 = valor3

                            if( valor3 == ''){
                                console.log('O campo deve ser prenchido')
                                exit()
                            }


                        entradaDados.question('Entrar com o valor da nota 4: \n', function(valor4){
                            let nota4 = valor4

                            if( valor4 == ''){
                                console.log('O campo deve ser prenchido')
                                exit()
                            }

                        
                            let media = calcularMedia(nota1, nota2, nota3, nota4)
                          
                            console.log(sexoA + ' ' + nome +' esta ' + verificarAp(media) + ' na disciplina de ' + disc)
                            console.log('Curso : ' + curs)
                            console.log(sexoP + ': ' + prof)
                            console.log('Notas do aluno: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' ' + nota4)
                            console.log('Media Final: ' + media)



                            entradaDados.question('Caso ' + sexoA + ' ' + nome + ' tenha ficado de exame, qual a nota do mesmo, se ele nao ficou de recuperacao digite "nao"\n', function(notaExa){
                                let notaExame = notaExa
                                
                                if( notaExame == 'nao'){
                                    console.log('O usuario verificou suas notas')
                                    exit()
                                }else{
                                    console.log(sexoA + ' ' + nome +' esta ' + verificarAp(media) + ' na disciplina de ' + disc)
                                    console.log('Curso : ' + curs)
                                    console.log(sexoP + ': ' + prof)
                                    console.log('Notas do aluno: ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' ' + nota4)
                                    console.log('Notas do exame: ' + notaExame)
                                    console.log('Media Final: ' + parseFloat(media) + parseFloat(notaExame))
                                }

                                if( valor4 == ''){
                                    console.log('O campo deve ser prenchido')
                                    exit()
                                }

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
})
