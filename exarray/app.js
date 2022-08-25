
    const listaProd = [
        'teclado',
        'branco',
        50.00,
        10
    ]
    const listAlunos = ['Eduardo', 'Toninho' , 'Heitor' ,'Melissa', 'ana', 'perucci', 'Leozinhoooo']

    const listaDisciplina = [
        'PWBE',
        'PWFE',
        'DB',
        'DM'
    ]
    //exibindo o tipo de dado 
    console.log(typeof(listaProd[3]))

    //exibindo um dado especifico
    console.log(listaProd[0])


    //exibindo qtde de itens dentro de uma array
    console.log('qtde de itens dentro de uma array:' + listaProd.length)


    //exibindo todos os itens dentro de uma array com lacos de repeticao
    let cont = 0

    //exemplo utilizando while
    while (cont < listAlunos.length) {
        console.log('o aluno da turma DS2M ' + listAlunos[cont])
        cont++
    }


    for (let cont = 0; cont < listAlunos.length; cont++) {
        console.log('o aluno da turma DS2M ' + listAlunos[cont])
        cont++
        
    }
    listAlunos.forEach(function(item) {
        console.log('o aluno da turma DS2M e: ' + item)
    })

    for (const item of listAlunos) {
        console.log('\n o aluno da turma DS2M e: ' + item)
    }
    console.log('\n********************************\n')

    listAlunos.push('arthur', 'lidia', 'isabelle')

    console.log(listAlunos)
    listAlunos.pop()

    console.log('\n********************************\n')

    listAlunos.unshift('enzo')
    console.log(listAlunos)

    console.log('\n********************************\n')

    listAlunos.shift()
    console.log(listAlunos)

    console.log('\n********************************\n')

    // let indice = listAlunos.indexOf('ana')
    // console.log(indice)

    console.log('\n********************************\n')

    // listAlunos.splice(indice)
    // console.log(listAlunos)

    console.log('\n********************************\n')

    const listaNovosAlunos = listAlunos.slice()
    console.log(listaNovosAlunos)

    console.log('\n********************************\n')

    listaNovosAlunos.push(listaDisciplina)
    console.log(listaNovosAlunos)

    console.log('\n********************************\n')
    let indice = listaNovosAlunos.indexOf(listaDisciplina)
    console.log(listaNovosAlunos[indice].indexOf('DB'))

    console.log('\n********************************\n')

    console.log('\n********************************\n')



    // splice == retira todos intens abaxi daquela posicao
    // slice == copia uma estrutura de array em outra variavel
    // forEach == varre toda a lista
    // push == adiciona mais elementos
    // pop == remove o ultimo elemento da lista
    // unshift == adiciona ao primeiro lugar da lista um elemento
    // indexOf == diz em que posicao o elemento esta
    // length == lista quantas elementos tem na llista
    //typeof == ediz de que tipo cada elemento é
    //clearrrrrrrrrrr
    
    console.log(' ========= CADE O GRU =========')

    listaContatos = [
        {
            nome: 'Leonardo Barbosa',
            idade: '16',
            telefone: '996336638',
            email: 'leonardobarbosantos@gmail.com',
            carros: [
                {
                    placa: 'abc-1234',
                    modelo: 'Corsa',
                    cor: 'prata'
                },
                {
                    placa: 'sss-1555',
                    modelo: 's15',
                    cor: 'vermelho'
                }
            ]
        },
        {
            nome: 'Heitor piroquinha',
            idade: '16',
            telefone: '88888888',
            email: 'eitorpintopqp@gmail.com'
        }
    ]

    console.log(listaContatos)

    console.log('+++')
    console.log(listaContatos.nome)
    console.log(listaContatos.email)

    //adiciona novo elemento no JSON em execucao
    listaContatos.celular = '(11) 996336638'
    console.log(listaContatos)


    console.log('=====================')

    //remove um elemento no JSON em execucao
    delete(listaContatos.telefone)
    console.log(listaContatos)

    console.log('Placa: ' + listaContatos[0].carros[0].placa)