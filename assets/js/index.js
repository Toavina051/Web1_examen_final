window.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.index_button')
    const button_sign = document.querySelector('.button_sign')
    setTimeout(() => {    
        button.addEventListener('click', () =>window.location.href = "./easy.html")
        button_sign.addEventListener('click', () =>window.location.href = "./form.html")
    }, 1000);
})