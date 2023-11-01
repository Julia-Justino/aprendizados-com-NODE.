var http = require('http'); //importação de módulo HTTP
var dt = require('./datahora');// importaçao de módulo própria data hora
http.createServer(function (req, res) {//criação do servidor
  res.writeHead(200, {'Content-Type': 'text/html'});//Criação de cabeçalho
  res.write("The date and time are currently: " + dt.myDateTime());//Escrever na página data hora
  res.end('Hello World!');// escreve no final hello word
}).listen(8080);// escolhe a porta da aplicação

