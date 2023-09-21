function otraFuncion(){
    falla();
}





function falla(){
    return 6 + x ;
}

try{
    falla();
}catch(err){
    console.log('el modulo de resgistro de articulo fallo, de le avi.....')
    console.log(err.message);
    console.log(err);
}


console.log('esto va despues del error ')