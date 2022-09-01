//'API'
var estados = [

    {
        sigla: 'SP',
        nome: 'Sao Paulo'

    },
    {
        sigla: 'BA',
        nome: 'Bahia'

    },
    {
        sigla: 'AC',
        nome: 'Acre'
    },
    {
        sigla: 'RJ',
        nome: 'Rio de Janeiro'
    },
    {

        sigla: 'MG',
        nome: 'Minas Gerais'

    },
    {

        sigla: 'MT',
        nome: 'Mato Grosso'

    },
]

//retorna os dados de um estado tendo como base a sigla


const getListEstado = function () {


    let erro = true
    let siglaEstado = []

    estados.forEach(item => {

        erro = false
        siglaEstado.push(item.sigla)

        return siglaEstado

    });
    if (erro) {
        return false
    } else {

        return siglaEstado

    }

}

const getEstados = function (siglaEstado) {

    let sigla = siglaEstado
    let estado = {}
    let erro = true
    if (sigla != undefined) {

        if (sigla != '' && sigla.length == 2) {

            estados.forEach(item => {

                if (item.sigla.indexOf(sigla.toUpperCase()) == 0) {
                    estado.uf = item.sigla
                    estado.descricao = item.nome
                    erro = false
                }

            });
            
        }

    }if (erro) {
        return false
    } else {
        return estado
    }
}

console.table(getEstados('ac'))