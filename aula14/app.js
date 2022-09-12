                    //import da biblioteca do express para criar a API
                    const express = require('express')

                    //import da biblioteca do cors para manipular as permissoes do protocolo http
                    const cors = require('cors')

                    //import da biblioteca do body-parser que vai manipular o corpo dos requisitos do protocolo http
                    const bodyParser = require('body-parser')

                    //cria um objeto chamado app que sera especialisa nas funcoes do express
                    const app = express()

                    // request => receber dados
                    // respose => devolver dados
                    app.use((request, response, next) => {

                        //mostra quem serao os ips que podem acessar a api    ||    * = todos
                        response.header('Access-Cotrol-Allow-Origin', '*')

                        //mostra quais serao os verbos(metodos) que a api ira reconhecer
                        response.header('Acess-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')

                        //estabelece que as permissoes acima serao representadas pelo cors
                        app.use(cors())

                        next()
                    })

                    //Endpoint Listagem de livros 
        app.get('/livros/:book', cors(), async function(request,response,next){
            let chave = request.params.book
            let livros = getLivro(chave)
     
        if(livros){
            response.status(200)
            response.json(livros)
        } else {
            response.status(404)
        }

   })

        app.listen(8080, function(){
        console.log('Servidor aguardando requisiçoes.')
})