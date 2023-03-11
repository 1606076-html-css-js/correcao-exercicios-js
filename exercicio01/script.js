
// Arrow function passada como segundo parâmetro
window.addEventListener("load", () => {
    document.getElementById("botaoExercicio01").addEventListener("click", executarSoma)

    document.getElementById("numero01").addEventListener("keyup", executarSoma)
    document.getElementById("numero02").addEventListener("keyup", executarSoma)
    document.getElementById("numero03").addEventListener("keyup", executarSoma)
})

function executarSoma() {
    const elementoNumero01 = document.getElementById("numero01")
    const elementoNumero02 = document.getElementById("numero02")
    const elementoNumero03 = document.getElementById("numero03")

    const valor01 = Number(elementoNumero01.value)
    const valor02 = Number(elementoNumero02.value)
    const valor03 = Number(elementoNumero03.value)

    const resultado = valor01 + valor02 + valor03

    document.getElementById("resultado").innerHTML = resultado
}

