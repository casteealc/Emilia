console.log("algo");
console.info("algo")
console.error("algo")


var table = [
    {
        a:1,
        b:'Z'
    },
    {
        a:2,
        b:'X'
    },
];


var cars=["AAA","Volvo","Vw"]

console.table(table)
console.table(cars)


console.group('conversacion')
console.log('hola')
console.count('bla bla bla bla ')
console.count('bla bla bla bla ')
console.count('bla bla bla bla ')
console.group('conversacion 2')
console.countReset('bla bla bla bla ')
console.count('bla bla bla bla ')
console.count('bla bla bla bla ')
console.groupEnd('conversacion 2')
console.groupEnd('conversacion ')

