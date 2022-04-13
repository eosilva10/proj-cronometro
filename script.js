// DEFININDO AS VARIAVEIS DOS VALORES
let hr = mn = sg = ms = "0" + 0,
    iniciarTimer

// DEFININDO AS VARIÁVEIS DE CADA BOTÃO
const btnIniciar = document.querySelector(".iniciar"),
 btnParar = document.querySelector(".parar"),
 btnReset = document.querySelector(".resetar")

// DEFININDO O EVENTO DE CADA BOTÃO 
btnIniciar.addEventListener("click", iniciar)
btnParar.addEventListener("click", parar)
btnReset.addEventListener("click", resetar)

// DEFININDO A AÇÃO DE CADA EVENTO
function iniciar() {
    btnIniciar.classList.add("active")
    btnParar.classList.remove("stopActive")

    iniciarTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms // OPERAÇÃO TERNARIA PARA DEIXAR O ALGARISMO ZERO(0) ANTES DO VALOR CHEGAR A 10

        if (ms == 100) {
            sg++
            sg = sg < 10 ? "0" + sg : sg
            ms = "0" + 0
        }

        if (sg == 60) {
            mn++
            mn = mn < 10 ? "0" + mn : mn
            sg = "0" + 0
        }

        if (mn == 60) {
            hr++
            hr = hr < 10 ? "0" + hr : hr
            mn = "0" + 0
        }
        
        escreveValor()
    }, 10) // 1000ms => 1s
}

function parar() {
    btnIniciar.classList.remove("active")
    btnParar.classList.add("stopActive")
    clearInterval(iniciarTimer)
}

function resetar() {
    btnIniciar.classList.remove("active")
    btnParar.classList.remove("stopActive")
    clearInterval(iniciarTimer)
    let hr = mn = sg = ms = "0" + 0
    escreveValor()
}

function escreveValor() {
    document.querySelector(".milisegundos").innerText = ms
    document.querySelector(".segundos").innerText = sg
    document.querySelector(".minutos").innerText = mn
    document.querySelector(".horas").innerText = hr
}