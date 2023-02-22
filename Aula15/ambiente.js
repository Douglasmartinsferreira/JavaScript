
let num = [6, 5, 7, 8, 1]
num.push(4)
num.sort()
console.log(`a minha contagem e a ${num}`)
console.log(`a quantidade de unidades e : ${num.length}`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log('o valor não foi encontrado!')
} else {
    console.log(`O valor 8 esta na posição: ${pos}`)
}