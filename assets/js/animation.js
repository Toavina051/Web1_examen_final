//Show the temporary numbers before the typing test beging
setTimeout(()=>{
    document.querySelector('.container_show-off').style.display = 'none';
}, 12000);

//Timer
let counter = 40;
//let time = counter * 60

const timerDisplay = document.getElementById('timer');

function countDown(){
    //const minutes = Math.floor(time/60 );
    //let seconds = time % 60;
    //timerDisplay = `${minutes}:{seconds}`;
    timerDisplay.innerHTML = `${counter}s`;
    
    if(counter <= 0){
        clearInterval(timerDisplay);
        timerDisplay.textContent = "Time's up";
    }

    counter--;
}
//const countInterval = 
setInterval(countDown, 1000);

//Typing text animation
const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Gamer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Homie";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Challenger";
    }, 8000);
}

textLoad();
setInterval(textLoad, 1000);

//Animation display in the game
window.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play_button');
    const typingArea = document.querySelector('#text-to-type');
    const inputField = document.querySelector('#input-field');
    
    typingArea.style.display = 'none';
    
        playButton.addEventListener('click', ()=>{
        playButton.style.display = 'none';
    
        const steps = document.querySelectorAll('.show-off');
        steps.forEach(step => step.style.opacity = 1);
    
        document.body.style.overflow = 'hidden';
        typingArea.style.display = 'none';
    
        setTimeout(() => {
            containerShowOff.style.display = 'none';
            document.body.style.backgroundColor = '';
            document.body.style.overflow = '';
            typingArea.style.display = 'flex';
            inputField.focus();
        }, 6000);
        });
    })