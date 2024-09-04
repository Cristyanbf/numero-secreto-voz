const menorValor = 1
const maiorValor = 1000



function sortearNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

const numeroSecreto = sortearNumero()
console.log("O número secreto é:", numeroSecreto)


const elementoMenor = document.getElementById('numero-menor')
elementoMenor.innerHTML = menorValor

const elementoMaior = document.getElementById('numero-maior')
elementoMaior.innerHTML = maiorValor



