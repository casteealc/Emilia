function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('hola ' + nombre)
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log("bla bla bla bla ......");
        callbackHablar();
    })
}


function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1000);
}

//ejemplo del callback hell

// console.log('iniciar preoceso')
// hola('Carlos', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log('termino proceso...')
//                 });
//             });
//         });
//     });
// });

function conversacion(nombre, veces,callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces,callback);
        })
    }else{
        adios(nombre, callback);
    }
    }

    console.log('iniciando proceso');
    hola('carlos', function(nombre){
        conversacion(nombre,3,function(){
            console.log('proceso terminado')
        })
    })
