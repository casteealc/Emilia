var varhola = document.getElementById("hola");
var varhola = document.querySelector(".holag")
document.write("<div>hhhhhhhhhhhhhhhh</div>")

varhola.innerHTML = "hola soy el nuevo contenido "
varhola.style.background = "red"
varhola.style.padding = "25px"
varhola.style.color= "white"
varhola.className = "claseejemplo titulo"

function colrx(color){
    varhola.style.background = color;
}

var todoslosdiv = document.getElementsByTagName('div')

var divcont = todoslosdiv[2]

divcont.innerHTML = "xxxxxxxxxx"

//cosole.log(varhola)
//cosole.log(varholag)
//cosole.log(todoslosdiv)

var parrafo = document.createElement("div")
var texto = document.createTextNode("Juan Carlos")
parrafo.appendChild(texto);
document.querySelector("#mi").appendChild(parrafo);
var xc = document.querySelector("#mi")
console.log(divcont)