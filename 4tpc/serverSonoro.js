var http = require('http')
var pug = require('pug')
var fs = require('fs')
var jsonfile = require('jsonfile')
var {parse} = require('querystring')

var myBD = 'lista.json'

var comprasServer = http.createServer(function(req,res){
    console.log(req.method + ' ' + req.url)
    if(req.method == 'GET'){
        if(req.url == '/w3.css'){
            fs.readFile('w3.css', (erro, dados)=>{
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/css'})
                    res.write(dados)
                }    
                else {
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.write('Erro na leitura do w3.css...')
                }    
                res.end() 
            })
        }
        else if(req.url == '/'){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write(pug.renderFile('index.pug'))
            res.end()
        }
        else
        {
            var url = req.url.split('/')
            console.log("PEDIDO1:"+url[1]+"\n\rDOCUMENTO1:"+url[2])
            console.log("URL1:"+req.url)
            console.log(url.toString())
            var isNumber= !isNaN(url[2])
            if(url[1] == 'musica' && isNumber){
                res.writeHead(200, {'Content-Type': 'text/xml; charset=utf-8'})
                fs.readFile('data/doc'+url[2]+'.xml', function (error, data) {
                    if (error) {
                        res.writeHead(404);
                        res.write('Documento não encontrado!\n\rDocumento em falta: '+'/data/doc'+url[2]);
                    } else {
                        res.write(data);
                    }
                    res.end();
                });
            }
            else if (req.url=="/musica/doc2html.xsl") {
                fs.readFile('data/doc2html.xsl', (erro, dados)=>{
                    if(!erro){
                        res.writeHead(200, {'Content-Type': 'text/xsl'})
                        res.write(dados)
                    }    
                    else {
                        res.writeHead(200, {'Content-Type': 'text/plain'})
                        res.write('Erro na leitura do w3.css...')
                    }    
                    res.end() 
                })
            }
            else {
                res.end('Erro: pedido não suportado ['+ req.url+']')
            }
        }
        
    }
    else{
        res.end('Erro: método não suportado [' + req.method + ']')
    }
})

comprasServer.listen(3021)

console.log('Servidor à escuta na porta 3021...')

function recuperaInfo(request, callback){
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded'){
        let body = ''
        request.on('data', bloco => {
            body += bloco.toString()
        })
        request.on('end', ()=>{
            callback(parse(body))
        })
    }
    else callback(null)
}