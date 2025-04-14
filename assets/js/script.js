/**
 * Point culture (en Français car je suis un peu obligé): 
 * Dans ce genre de jeu, un mot equivaut a 5 caractères, y compris les espaces. 
 * La precision, c'est le pourcentage de caractères tapées correctement sur toutes les caractères tapées.
 * 
 * Sur ce... Amusez-vous bien ! 
 */
let startTime = null, previousEndTime = null;
let currentWordIndex = 0;
const wordsToType = [];

const modeSelect = document.getElementById("mode");
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const results = document.getElementById("results");

const words = {
    easy: ["apple", "banana", "grape", "orange", "cherry"],
    medium: ["keyboard", "monitor", "printer", "charger", "battery"],
    hard: ["synchronize", "complicated", "development", "extravagant", "misconception"]
};

// Generate a random word from the selected mode
const getRandomWord = (mode) => {
    const wordList = words[mode];
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// Initialize the typing test
const startTest = (wordCount = 50) => {
    wordsToType.length = 0; // Clear previous words
    wordDisplay.innerHTML = ""; // Clear display
    currentWordIndex = 0;
    startTime = null;
    previousEndTime = null;

    for (let i = 0; i < wordCount; i++) {
        wordsToType.push(getRandomWord(modeSelect.value));
    }

    wordsToType.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        if (index === 0) span.style.color = "green"; // Highlight first word
        wordDisplay.appendChild(span);
    });

    inputField.value = "";
    results.textContent = "";
};

// Start the timer when user begins typing
const startTimer = () => {
    if (!startTime) startTime = Date.now();
};

// Calculate and return WPM & accuracy
const acc = () => {
    let prec = 0
    for(let i = 0; i < wordsToType[currentWordIndex].length; i++){
        if (inputField.value[i] == wordsToType[currentWordIndex][i]) {
            prec += (100/wordsToType[currentWordIndex].length)
        }
    }
    return prec
}
const getCurrentStats = () => {
    const elapsedTime = (Date.now() - previousEndTime) / 1000; // Seconds
    const wpm = (wordsToType[currentWordIndex].length / 5) / (elapsedTime / 60); // 5 chars = 1 word
    const accuracy = acc()
    //const accuracy = (wordsToType[currentWordIndex].length / inputField.value.length) * 100;

    return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
};
const total_accuracy = () => {
    let sum = 0
    for (let i = 0; i < wordsToType.length; i++){
        sum += accuracy
    }
    return { total:(sum / wordsToType.length).toFixed(2) }
}
 

// Move to the next word and update stats only on spacebar press

const updateWord = (event) => {
    if (event.key === " " && inputField.value.trim().length >= 2) { // Check if spacebar is pressed
        //if (inputField.value.trim() === wordsToType[currentWordIndex]) {
            //}
            if (!previousEndTime) previousEndTime = startTime;

            const { wpm, accuracy } = getCurrentStats();
            results.textContent = `WPM: ${wpm}, Accuracy: ${accuracy}%`;

            currentWordIndex++;
            previousEndTime = Date.now();
            highlightNextWord();

            inputField.value = ""; // Clear input field after space
            event.preventDefault(); // Prevent adding extra spaces
    }
};

// Highlight the current word in green
const highlightNextWord = () => {
    const wordElements = wordDisplay.children;

    if (currentWordIndex < wordElements.length) {
        if (currentWordIndex > 0) {
            wordElements[currentWordIndex - 1].style.color = "black";
        }
        wordElements[currentWordIndex].style.color = "green";
    }
};

// Event listeners
// Attach `updateWord` to `keydown` instead of `input`
inputField.addEventListener("keydown", (event) => {
    startTimer();
    updateWord(event);
});
modeSelect.addEventListener("change", () => startTest());

// Start the test
startTest();

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
