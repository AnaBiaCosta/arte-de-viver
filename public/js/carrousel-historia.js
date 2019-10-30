let ir = document.querySelector('.next')
ir.addEventListener('click', proximo)

let prev = document.querySelector('.prev')
prev.addEventListener('click', voltar)

let slide = document.querySelector('.slide')

let totalConteudo = document.querySelectorAll('.information-container').length

let contadorHistoria = 1;

let margin;

let totalPaginacao = document.querySelectorAll('.pagination-item').length

console.log(totalPaginacao)


function proximo() {
    if (contadorHistoria < totalConteudo) {
        margin = contadorHistoria * -1000
        slide.style.marginLeft = `${margin}px`
        contadorHistoria++
    }
}

function voltar() {
    if (contadorHistoria > 1) {
        margin = margin + 1000
        slide.style.marginLeft = `${margin}px`
        contadorHistoria--
    }
}

