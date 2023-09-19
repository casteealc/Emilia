const fr = require('fs')

function leer (ruta, cb){
    fs.readFile(ruta, (err, data)=>{
        console.log(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    fs.writefile(ruta,contenido, function(err){
        if(err){
            console.error('no e podido escribir ', err)
        }else{
            console.log('se a escrito el archivo')
        }
    })
}


// leer(__dirname + '/lectura.txt', console.log)   
escribir(__dirname + '/lectura2.txt', 'soy un archivo nuevo de log',console.log)
leer(__dirname + 'lectura2.txt', console.log)