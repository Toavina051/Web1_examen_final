//Show the temporary numbers before the typing test beging
const containerShowOff = document.querySelector('.container_show-off');

setTimeout(()=>{
    containerShowOff.style.display = 'none';
}, 12000);

//Timer
let counter = 40;
let interval = null
//let time = counter * 60

const timerDisplay = document.getElementById('timer');

function countDown(){
    //const minutes = Math.floor(time/60 );
    //let seconds = time % 60;
    //timerDisplay = `${minutes}:{seconds}`;
    timerDisplay.innerHTML = `${counter}s`;
    
    const time_out = document.querySelector('.input-element')
    if(counter <= 0){
        clearInterval(interval);
        timerDisplay.textContent = "Time's up";
        if (time_out) {
            time_out.classList.add('input-element1')
        }
    }
    else{
        counter --
    }

}


window.addEventListener('DOMContentLoaded', () => {
    const input_test = document.querySelector('.input-element')

    input_test.addEventListener('input', () => {
        if (!interval) {    
            interval = setInterval(countDown, 1000);
        }
    })
})

/*window.addEventListener('DOMContentLoaded', () => {
    const mod_button = document.querySelector('.select_mod')

    mod_button.addEventListener('change', ()=>{
        window.location.reload()
    })
})*/
//const countInterval = 
//setInterval(countDown, 1000);

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

//Data counter
document.addEventListener("DOMContentLoaded", () => {
    const containerCounter = document.querySelector('.container-counter');
    const counters = containerCounter.querySelectorAll('.counter span');

let activated = false;

function animateCounters(){
    counters.forEach(counter => {
        counter.innerText = 0;
        let count = 0;
        const target = parseInt(counter.dataset.count);
        const increment = Math.ceil(target/100);

        function updateCount(){
            count += increment;
            if(count < target){
                counter.innerText = count;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
    });
}

function resetCounters(){
    counters.forEach(counter => {
        counter.innerText = 0;
    });
}

window.addEventListener("scroll", () => {
    const containerTop = containerCounter.offsetTop;
    const containerBottom = containerTop + containerCounter.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const containerVisible = scrollY + windowHeight > containerTop && scrollY < containerBottom;

    if(containerVisible && !activated){
        animateCounters();
        activated = true;
    } else if (!containerVisible && activated){
        resetCounters();
        activated = false;
    }
});
});