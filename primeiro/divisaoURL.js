var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

/*a função de callback simplesmente analisa a URL da solicitação e extrai os parâmetros year e month. 
Em seguida, combina esses parâmetros em uma string e envia a string de volta ao cliente. */