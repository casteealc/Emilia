var boton = document.querySelector("#boton");


function cambiarcolor(){
    console.log("me presionastes")

    var colordelboton = boton.computedStyleMap.background;

    if( colordelboton == "green"){
        boton.style.background ="red"
    }else{
        boton.style.background ="green"
    }
    return true;

}

boton.addEventListener('load', function(){
   



    
});


boton.addEventListener('clik', function(){
    cambiarcolor();
    this.style.border = "10px soli black"
});


boton.addEventListener('clik', function(){
    cambiarcolor();
    this.style.border = "black"
});
