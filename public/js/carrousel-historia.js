let ir = document.querySelector('.next')
ir.addEventListener('click', proximo)

let prev = document.querySelector('.prev')
prev.addEventListener('click', voltar)

let slide = document.querySelector('.slide')

let totalConteudo = document.querySelectorAll('.information-container').length

let contador = 1;

let margin;

function proximo() {
    if (contador < totalConteudo) {
        margin = contador * -1000
        slide.style.marginLeft = `${margin}px`
        contador++
    }
}

function voltar() {
    console.log(contador)
    if (contador > 1) {
        margin = margin + 1000
        slide.style.marginLeft = `${margin}px`
        contador--
    }

}