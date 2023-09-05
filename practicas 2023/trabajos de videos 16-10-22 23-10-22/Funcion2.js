// function sumar (varA, varB, bandera=false){
//     console.log("la suma es igual a " + (varA+varB))
//     console.log(bandera)
// }

// sumar(5,6,8)
// parametros rest ...

function equipos(equipo1,equipo2, ...restoDeEquipos){
    console.log("equipo 1: ", equipo1)
    console.log("equipo 2: ", equipo2)
    console.log(restoDeEquipos)
}

equipos("cremas","rojos", "xela", "rrrrr", "xv6")

console.log("***********************************")

var equiposResta = ["cccccc","lllll","mmmmm"]
// spread

equipos("wwww","ccccc", ...equiposResta)