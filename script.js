
// Arrow function passada como segundo parâmetro
// window.addEventListener("load", () => {
//     document.getElementById("botaoExercicio01").addEventListener("click", executar)
// })


// function executar(){
//     // const valor01 = Number(document.getElementById("numero01").value)

//     // const resultado = retornarMaiorNumeroDeDoisNumeros(valor01, valor02)

//     // document.getElementById("resultado").innerText = resultado
// }


// const meuVetor = ["a","b","c","d","e","f"]

// // Chamando minha função
// const retorno = inverteVetor(meuVetor)


















console.log(
    inverteVetor([1, 2, 3])
)

console.log(
    inverteVetor(["a", "b"])
)

const retorno01 = inverteVetor(["a", "b"])
const retorno02 = inverteVetor(["x", "y"])
const retorno03 = inverteVetor(["a", "b"])




// Declarando minha função
function inverteVetor(vetor) {
    let vetorInverso = []
    let desce = vetor.length - 1

    while (desce >= 0) {
        vetorInverso.push(vetor[desce])
        desce--
    }

    // return vetor.reverse()
    return vetorInverso
}















/* MUNDO QUE ESTÁ CHAMANDO A FUNÇÃO*/
function aoClicar() {
    const resultado01 = somarDoisNumeros(10, 20)
    const resultado02 = somarDoisNumeros(50, 10)

    mostrarResultadoNaTela(resultado01)
    mostrarResultadoNaTela(resultado02)
}

/* MUNDO QUE ESTÁ CHAMANDO A FUNÇÃO*/
function mostrarResultadoNaTela(resultado) {
    console.log(resultado)
}

/* MUNDO DA FUNÇÃO */
function somarDoisNumeros(num1, num2) {
    const resultado = 10 + num1 + num2

    return 10
}
/* MUNDO DA FUNÇÃO */





