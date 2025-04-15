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