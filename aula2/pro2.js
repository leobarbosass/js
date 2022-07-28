                    console.log('--- EXERCICIO PARA CALCULAR A MEDIA ---\n')

                    var readline = require('readline')

                    var entradaDados = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    })

                    entradaDados.question('Informe seu usuario: \n', function (usuario){

                        let usuarioPessoa = usuario
                        console.log('Bem-vindo, ' +usuarioPessoa+ '!\n')

                        entradaDados.question('Entrar com valor da nota 1: \n', function(valor1){
                            let nota1 = valor1

                            entradaDados.question('Entrar com o valor da nota 2: \n', function(valor2){
                                let nota2 = valor2

                                entradaDados.question('Entrar com o valor da nota 3: \n', function(valor3){
                                    let nota3 = valor3
                    
                                    entradaDados.question('Entrar com o valor da nota 4: \n', function(valor4){
                                        let nota4 = valor4
                                        let media
                    
                                        if(usuarioPessoa == ''){
                                            console.log('Usuario deve ser informado.')
                                        
                                        }else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                            console.log('E necessario informar todas as notas para o calculo')
                    
                                        }else{
                                            media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4
                    
                                            console.log('A media do usuario '+usuario+' eh de: ' + media)
                                            
                                        }if (media > 7.0) {
                                            console.log('O usuario foi aprovado!')
                    
                                        }else if (4.0 < media > 6.9) {
                                            console.log('O usuario esta em exame')
                    
                                        }else{
                                            console.log('O usuario foi reprovado')

                                            entradaDados.close()
                                        }
                                    })
                                })
                            })
                        })
                    })