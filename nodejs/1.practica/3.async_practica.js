// function soyAsincrono(){
//     console.log('hola soy una funcion asincrona');
//     setTimeout(function(){
//         console.log('estoy siendo asincrono')
//     }, 1000)
// }

// console.log('iniciando preceso ......')
// soyAsincrono();
// console.log('Terminando proceso .....')

// function soyAsincrono(miCallback){
//     console.log('hola soy una funcion asincrona');
//     setTimeout(function(){
//         console.log('estoy siendo asincrono')
//         miCallback();
//     }, 1000)
// }

// console.log('iniciando preceso ......')
// soyAsincrono(function(){
//     console.log('Terminando proceso .....')
// });

// function hola(nombre, miCallback){
//     setTimeout(function(){
//         console.log('hola ' + nombre)
//         miCallback();
//     }, 1000);
// }


// function adios(nombre, otroCallback){
//     setTimeout(function(){
//         console.log('Adios ' + nombre)
//         otroCallback();
//     }, 1000);
// }


// console.log('iniciando procesos....')

// hola('Carlos', function(){
//     adios('Carlos', function(){
//         console.log('termino proceso....')
//     })
// })

function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('hola ' + nombre)
        miCallback(nombre);
    }, 1500);
}


function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1000);
}


console.log('iniciando procesos....')

hola('Carlos', function(nombre){
    adios(nombre, function(){
        console.log('termino proceso....')
    })
})