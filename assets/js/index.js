window.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.play_button-index')
    const button_sign = document.querySelector('.button_sign')
    button.addEventListener('click', () =>window.location.href = "./game.html")
    button_sign.addEventListener('click', () =>window.location.href = "./form.html")
})


window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("container-top_scroll", window.scrollY > 0)
})