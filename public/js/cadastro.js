let btnCadastro = document.querySelector(".action-cadastro")
btnCadastro.addEventListener('click', concluirCadastro)

let btnVoltar= document.querySelector(".btn-back-cadastro")
btnVoltar.addEventListener('click', voltar)

let body = document.querySelector('.body')

let popUp = document.querySelector(".pop-up")


function concluirCadastro(){
    body.classList.add("overflow-hidden")
    popUp.style.display = "flex"

}

function voltar(){
    window.location.replace("../index.html")
}