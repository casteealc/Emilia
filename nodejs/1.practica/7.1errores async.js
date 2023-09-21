function fallaAsyncrono(cb) {
    setTimeout(function () {
        try {
            return 3 + x;
        } catch (err) {
            console.log('error en mi funcion asicrona');
            cb(err);
        }
    })
}


try {
    fallaAsyncrono(function (err) {
        console.log(err.message)
    });
} catch (err) {
    console.error('Fallo');
    console.error(err.message)
}

console.error('despues del error')