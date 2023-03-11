
// Arrow function passada como segundo parâmetro
window.addEventListener("load", () => {
    document.getElementById("botaoExercicio01").addEventListener("click", executar)
})


function executar(){
    const valor01 = Number(document.getElementById("numero01").value)
    const valor02 = Number(document.getElementById("numero02").value)

    const resultado = retornarMaiorNumeroDeDoisNumeros(valor01, valor02)

    document.getElementById("resultado").innerText = resultado
}



function retornarMaiorNumeroDeDoisNumeros(num1, num2){
    let menorNumero

    if(num1 > num2) {
        menorNumero = num1
    } else {
        menorNumero = num2
    }

    return menorNumero
}





