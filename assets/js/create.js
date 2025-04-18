window.addEventListener("DOMContentLoaded", function(){
    const bouton = document.querySelector('.button_create')
    const message = this.document.querySelector('.message')
    const message1 = this.document.querySelector('.message1')
    
    function connect() {
        if (!document.querySelector(".mail").value || !document.querySelector(".password").value) {
            message.classList.add("message_allert");
            setTimeout(() => {
                message.classList.remove("message_allert")
            }, 3000);
            
        }
        else{
            setTimeout(() => {
                bouton.innerHTML = "Please wait"
            },10)
            setTimeout(() => {
               if (document.querySelector(".password").value === document.querySelector(".password1").value) {
                    window.location.href = "./game.html"
                }
                else if (document.querySelector(".password").value != document.querySelector(".password1").value) {
                    bouton.innerHTML = "Login now"
                    message1.classList.add("message_allert")
                    setTimeout(() => {
                        message1.classList.remove("message_allert")
                    }, 3000);
                }
            },3000)
        } 
    }
    username = document.querySelector('.username').value
    password = document.querySelector(".password").value
    bouton.addEventListener('click', connect)
})