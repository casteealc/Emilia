const http = require('http')

http.createServer (function(req, res){
    console.log('Nueva peticion')
    console.log(req.url)
    res.writeHead(201,{'content-type':'text/plain'})
    res.write('hola, mi primer repuesta dede NodeJS')
    res.end();
}).listen(3000)