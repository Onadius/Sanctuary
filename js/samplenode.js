var http = require('http');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('Server running!');

// ���N�G�X�g�̏���
function doRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello, Epikouros World\n');
    res.end();
}