let lista = []

// adicionar valores
function adicionar(valor) {
    lista.push(valor)
}
    
//média
function soma(){
let soma = 0
for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    return soma
}

function media(){
    return soma()/lista.length
}

//resultado final
adicionar(15) //click no botão adicionar
adicionar(30) //click no botão adicionar
adicionar(45) //click no botão adicionar

console.log('lista:', lista) //lista para exibir

console.log('soma:', soma())

console.log('media:', media())
