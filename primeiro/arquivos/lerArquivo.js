var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('../primeiro/html/teste.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

/* Cria um servidor que le o arquivo teste.html, e exibe o arquivo no corpo da página */