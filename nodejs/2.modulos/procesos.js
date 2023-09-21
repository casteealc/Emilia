

process.on('beforeExit',()=>{
    console.log('el proceso va a termino ')
})



process.on('exit',()=>{
    console.log('el proceso termino ');
    setTimeout(()=>{
        console.log('Esto nunca se va ver')
    },0)
})




process.on('uncaughtException',(err, origen)=>{
    console.error('vaya se me olvido un try catch ')
    // console.error(err)
})

funcionnoexiste();
console.log('que paso con el error')