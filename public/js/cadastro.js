let body = document.querySelector('.body')

let popUp = document.querySelector(".pop-up")

let btnCadastro = document.querySelector(".action-cadastro")
btnCadastro.addEventListener('click', concluirCadastro)

let btnVoltar= document.querySelector(".btn-back-cadastro")
btnVoltar.addEventListener('click', voltar)

function concluirCadastro(){
    body.classList.add("overflow-hidden")
    popUp.style.display = "flex"

}

function voltar(){
    window.location.replace("../index.html")
}