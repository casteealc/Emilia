let buffer = Buffer.from('hola')
console.log(buffer)
console.log(buffer.toString())

let abc = Buffer.alloc(26)
console.log(abc)

for(let i = 0; i< 26; i++){
    abc[i] = i + 97
}

console.log(abc.toString())