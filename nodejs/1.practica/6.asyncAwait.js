function hola(nombre) {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            console.log('hola ' + nombre)
            resolve(nombre);
        }, 1000);
    
    })   
    }

    async function hablar(nombre) {
        return new Promise((resolve, reject)=>{
            setTimeout(function () {
                console.log("bla bla bla bla ......");
                resolve(nombre)
                // reject('Error en function Hablar');
            }, 1000);
        })   
    }

    async function adios(nombre) {
        return new Promise(function (resolve, reject){
            setTimeout(function () {
                console.log('Adios ' + nombre)
                // reject('Error en la funcion adios');
                resolve(nombre)
            }, 1000);
        })  
        }



        async function notengopromesa(){
            console.log('No tengo una promesa')
        }



        async function main(){

            let nombre = await hola('Carlos')
            await hablar();
            await hablar();
            await hablar();
            await hablar();
            await notengopromesa();
            await adios(nombre);

        }

        console.log('iniciando proceso...')
        main()
        console.log('finalizar proceso...')

