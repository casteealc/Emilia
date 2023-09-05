var equipos = function(equipo){
    return "el equipo es >" + equipo;
}


function sumar(numeroA, numeroB, multiplicarCall, divarCall){
    var total = numeroA+numeroB;
    var total = numeroB*numeroA;
    var divTotal = numeroB/numeroA;
    multiplicarCall(total, 5);
    divarCall(divTotal)
    // console.log("la suma es igual a " + (numeroA+numeroB))
    return total;
}


sumar(1,2, Equipovar => {console.log(Equipovar)},
divTotal => (console.log(divTotal)) 
);

 



// console.log(sumar(1,1))