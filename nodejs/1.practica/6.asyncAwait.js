function hola(nombre){
    return new promise(function (resolve, reject){
        setTimeout(function (){
            console.log('hola ' + nombre)
            resolve(nombre);
        },1000);
    
    })
}
    
    async function hablar(nombre) {
        return new promise ((resolve, reject)=>{
            setTimeout(function () {
                console.log("bla bla bla bla ......");
                resolve(nombre)
                //reject('error en funcion Hablar');
            }, 1000);    
        })            
    }

    async function adios(nombre) {
    return new promise(function (resolve,reject){
        setTimeout(function () {
            console.log('Adios ' + nombre)
           reject('Error en la funcion adios');
        }, 1000);
    })  
    }

   
    async function notengopromesa(){
        console.log('no tengo una promesa')
    }




    async function main(){

        let nombre = await hola('carlos')
        await hablar();
        await hablar();
        await hablar();
        await hablar();
        await adios(nombre);

    }


    console.log('iniciando proceso.....')
    main()
    console.log('finalizar proceso proceso....')
    