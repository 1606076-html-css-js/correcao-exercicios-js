
// Arrow function passada como segundo parâmetro
window.addEventListener("load", () => {
    document.getElementById("botaoExercicio01").addEventListener("click", executarSoma)
})

function executarSoma() {
    let texto = ""

    // condição de parada
    for (let numeroAtual = 1; numeroAtual <= 100; numeroAtual++) {
        texto = texto + numeroAtual
    }



    for (let index = 0; index < 10; index++) {
        console.log("Esta linha se repetirá 10 vezes")
    }




    let numeroAtual = 0
    while (numeroAtual < 10) {
        texto = (texto + numeroAtual) + ','

        numeroAtual += 2
    }

    document.getElementById("resultado").innerHTML = texto
}

