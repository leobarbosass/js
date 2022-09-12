/*
    bibliotecas necessarias para criar uma API
            eh uma biblioteca para criar aplicacoes em node no formato de API
            express => npm install express --save

            eh uma biblioteca para manipular as permissoes  do protocolo http
            cors - npm install cors --save

            eh uma biblioteca que permite manipular o corpo do protocolo http
            body-parser - npm install body-parser --save
*/

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
    response.header('Access-Cotrol-Allow-Origin', '*')
})