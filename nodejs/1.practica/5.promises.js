function hola(nombre) {
return new promise(function(resolve,rejet){
    setTimeout(function () {
        console.log('hola ' + nombre)
        resolve(nombre);
    }, 1000);

})   
}

function hablar(nombre) {
    return new promise ((resolve, reject)=>{

        setTimeout(function () {
            console.log("bla bla bla bla ......");
            reject('Error en funcion Hablar');
        }, 1000);
    
    })
   

}
   

function adios(nombre) {

return new promise(function (resolve,rejet){

    setTimeout(function () {
        console.log('Adios ' + nombre)
        resolve('Error en la funcion adios');
    }, 1000);
})  
}

// console.log('iniciando el proceso');
// hola('carlos')
// .then(adios)
//     // .then(nombre => {
//     //     return adios(nombre);
//     // })
//     // .then(nombre => {
//     //     return adios(nombre);
//     //     })
//     .then((nombre)=>{
//         console.log('terminando el proceso ' + nombre)
//     });

console.log('iniciando el proceso');
hola('carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then((nombre) => {
        console.log('Terminando el proceso ' + nombre)
    })
    .catch(error => {
        console.error('ha habido un error:')
        console.error(error)
    })
    ;