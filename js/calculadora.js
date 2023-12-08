/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

function somar() {
    const numero1 = parseFloat(document.querySelector("#numero1Soma").value)
    const numero2 = parseFloat(document.querySelector("#numero2Soma").value)

    const total = numero1 + numero2

    document.querySelector(".resultado").setAttribute('id', 'resultadoSoma')
    

    const paragrafo = document.getElementById("resultadoSoma")
    const resultado = document.createElement("strong")
    paragrafo.appendChild(resultado)
    resultado.innerText = total

}

function subtrair() {
    const numero1 = parseFloat(document.querySelector("#numero1Sub").value)
    const numero2 = parseFloat(document.querySelector("#numero2Sub").value)

    const total = numero1 - numero2

   
    

    const paragrafo = document.getElementById("resultadoSub")
    const resultado = document.createElement("strong")
    paragrafo.appendChild(resultado)
    resultado.innerText = total
    }

function multiplicar() {
    const numero1 = parseFloat(document.querySelector("#numero1Mult").value)
    const numero2 = parseFloat(document.querySelector("#numero2Mult").value)

    const total = numero1 * numero2

    
    

    const paragrafo = document.getElementById("resultadoMult")
    const resultado = document.createElement("strong")
    paragrafo.appendChild(resultado)
    resultado.innerText = total
}

function dividir() {
    const numero1 = parseFloat(document.querySelector("#numero1Div").value)
    const numero2 = parseFloat(document.querySelector("#numero2Div").value)

    const total = numero1 / numero2

  
    

    const paragrafo = document.getElementById("resultadoDiv")
    const resultado = document.createElement("strong")
    paragrafo.appendChild(resultado)
    resultado.innerText = total

}
