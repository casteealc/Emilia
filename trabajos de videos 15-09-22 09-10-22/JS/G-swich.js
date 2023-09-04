

var edad = 45;
var mensaje = "";

switch (edad) {
    case 18:
        mensaje = "es mayor de edad";
         break;
    case 25:
        mensaje = " es mayor de edad";
        break;
    case 40:
        mensaje = "es de la tercera edad";
        break;
    default:
        mensaje = "no tiene ninguna de las edades registradas"
        break;
}

console.log(mensaje)
