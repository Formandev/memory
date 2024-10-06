
const svgIcons = {
    "а": "img/ankh-solid-svgrepo-com.svg",
    "б": "img/buddhism-svgrepo-com.svg",
    "в": "img/cao-dai-svgrepo-com.svg",
    "г": "img/eagle-symbol-with-a-star-svgrepo-com.svg",
    "д": "img/ichthys-svgrepo-com.svg",
    "е": "img/iron-cross-1-svgrepo-com.svg",
    "є": "img/jainism-religion-svgrepo-com.svg",
    "ж": "img/jedi-svgrepo-com.svg",
    "з": "img/menorah-solid-svgrepo-com.svg",
    "и": "img/nazi-ss-mark-svgrepo-com.svg",
    "і": "img/nazi-symbol-3-svgrepo-com.svg",
    "ї": "img/religious-muslim-svgrepo-com.svg",
    "й": "img/sickle-and-hammer-svgrepo-com.svg",
    "к": "img/snake-svgrepo-com.svg",
    "л": "img/star-of-david-pictogram-svgrepo-com.svg",
    "м": "img/star-wars-134-svgrepo-com.svg",
    "н": "img/yin-yang-faith-svgrepo-com.svg",
    "о": "img/ball-volleyball-svgrepo-com.svg",
    "п": "img/rocket-svgrepo-com.svg",
    "р": "img/club-svgrepo-com.svg",
    "с": "img/baseball-bat-svgrepo-com.svg",
    "т": "img/bell-svgrepo-com.svg",
    "у": "img/aperture-svgrepo-com.svg",
    "ф": "img/bishop-svgrepo-com.svg",
    "х": "img/52.svg",
    "ц": "img/scorpio-svgrepo-com.svg",
    "ч": "img/leo-svgrepo-com.svg",
    "ш": "img/key-svgrepo-com.svg",
    "щ": "img/king-svgrepo-com.svg",
    "ь": "img/ice-cream-svgrepo-com.svg",
    "ю": "img/gem-svgrepo-com.svg",
    "я": "img/game-controller-svgrepo-com.svg",
    "а1": "img/dna-svgrepo-com.svg",
    "а2": "img/cupcake-svgrepo-com.svg"
};



const difficultyLevels = {
    ease: {
        '6x6': ['а', 'а', 'а', 'б', 'б', 'б', 'в', 'в', 'г', 'г', 'д', 'д', 'е', 'е', 'є', 'ж', 'з', 'и'],
        '8x8': ['а', 'а', 'а', 'б', 'б', 'б', 'в', 'в', 'в', 'г', 'г', 'г', 'д', 'д', 'е', 'е', 'є', 'є', 'ж', 'ж', 'з', 'з', 'и', 'и', 'і', 'і', 'ї', 'ї', 'й', 'к', 'л', 'м'],
        '10x10': ['а', 'а', 'а', 'б', 'б', 'б', 'в', 'в', 'в', 'г', 'г', 'г', 'д', 'д', 'д', 'е', 'е', 'є', 'є', 'ж', 'ж', 'з', 'з', 'и', 'и', 'і', 'і', 'ї', 'ї', 'й', 'й', 'к', 'к', 'л', 'л', 'п','п', 'р', 'р', 'с', 'с', 'т', 'т', 'у', 'у', 'ф', 'ф', 'х', 'х', 'ц']
    },
    normal: {
        '6x6': ['а', 'а', 'а', 'б', 'б', 'і', 'в', 'в', 'г', 'г', 'д', 'ї', 'е', 'й', 'є', 'ж', 'з', 'и'],
        '8x8': ['а', 'а', 'а', 'б', 'б', 'б', 'в', 'в', 'г', 'г', 'д', 'д', 'е', 'е', 'є', 'є', 'ж', 'ж', 'з', 'з', 'и', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р'],
        '10x10': ['а', 'а', 'а', 'б', 'б', 'б', 'в', 'в', 'в', 'г', 'г', 'д', 'д', 'е', 'е', 'є', 'є', 'ж', 'ж', 'з', 'з', 'и', 'и', 'і', 'і', 'ї', 'ї', 'й', 'й', 'к', 'л', 'п', 'р', 'р', 'с', 'т', 'т ', 'у', 'у', 'ф', 'ф', 'х', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']
    },
    hard: {
        '6x6': ['а', 'а', 'к', 'б', 'б', 'і', 'в', 'л', 'г', 'м', 'д', 'ї', 'е', 'й', 'є', 'ж', 'з', 'и'],
        '8x8': ['а', 'а', 'а', 'б', 'б', 'в', 'в', 'г', 'г', 'д', 'д', 'е', 'е', 'є', 'є', 'ж', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у'],
        '10x10': ['а', 'а', 'а', 'б', 'б', 'б', 'в', 'в', 'г', 'г', 'д', 'д', 'е', 'е', 'є', 'є', 'ж', 'ж', 'з', 'з', 'и', 'и', 'і', 'і', 'ї', 'ї', 'й', 'й', 'к', 'к', 'л', 'л', 'п','п', 'р', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я', 'а1', 'а2']
    }
};


let matchedPairs = 0;
let canSelect = true;
let selectedCells = [];
let timerInterval;
let milliseconds = 0;
let isPaused = false;
let isChecking = false;

const timerElement = document.getElementById('timer');
const PlayBtn = document.getElementById('play-btn');
const startWindow = document.getElementById('start-window');
const gameContainer = document.getElementById('game-container');
const winMessage = document.getElementById('win-message');
const interfaceBtn = document.getElementById('interface-btn');
const fieldSelect = document.getElementById('field-select');
const gameWindow = document.getElementById("game-window");

const blurOverlay = document.getElementById("pause-overlay");

const exitBtn = document.getElementById('exit-btn');
const pauseBtn = document.getElementById('pause-btn');
const restartBtn = document.getElementById('restart-btn')

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = ms % 1000;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${Math.floor(milliseconds / 10)}`;
}

function updateTimer() {
    milliseconds += 10; // Збільшуємо таймер на 10 мс
    timerElement.textContent = formatTime(milliseconds);
}

function checkWin(size) {
    if (matchedPairs === (size * size) / 2) {
        pauseBtn.style.display= "none";
        clearInterval(timerInterval); 
        blurOverlay.style.display = 'block';
        winMessage.style.display = 'block'; 
        winMessage.textContent = `You win! Time: ${formatTime(milliseconds)}`;
    }
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function generateGameValues(difficulty, size) {
    let values = [...difficultyLevels[difficulty][`${size}x${size}`]];
    values = [...values, ...values];
    shuffle(values);

    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] === values[i + 1]) {
            
            let swapIndex = i + 2 < values.length ? i + 2 : i - 1;
            [values[i + 1], values[swapIndex]] = [values[swapIndex], values[i + 1]];
        }
    }
    return values;
}

PlayBtn.addEventListener('click', () => {
    startWindow.style.display = 'none'; 
    gameContainer.style.display = 'flex';
    timerElement.style.display = "block";
    interfaceBtn.style.display = "block";
    winMessage.style.display = 'none';
    blurOverlay.style.display = 'none';
    pauseBtn.style.display= "inline-block";

    const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked');
    const difficulty = selectedDifficulty.id;

    const existingGameField = gameContainer.querySelector('.game-field');
    if (existingGameField) {
        gameContainer.removeChild(existingGameField); 
    }

    const size = parseInt(fieldSelect.value);
    const gameField = document.createElement('div');
    gameField.classList.add('game-field');
    gameField.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gameField.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const gameValues = generateGameValues(difficulty, size);
    matchedPairs = 0;

    for (let i = 0; i < size * size; i++) {
        const gameCell = document.createElement('div');
        gameCell.classList.add('game-cell');

        const letter = gameValues[i % gameValues.length];
        const img = document.createElement('img');
        img.src = svgIcons[letter]; 
        img.alt = letter; 
        img.style.display = 'none'; 

        gameCell.appendChild(img);
        gameCell.addEventListener('click', () => {

    if (!canSelect || isChecking || gameCell.classList.contains('selected') || gameCell.classList.contains('matched')) return;

    gameCell.classList.add('selected'); 
    img.style.display = 'block'; 
    selectedCells.push({ cell: gameCell, letter: letter });

  
    if (selectedCells.length === 2) {
        canSelect = false; 
        isChecking = true; 
        const [first, second] = selectedCells;

  
        if (first.letter === second.letter) {
            matchedPairs++;
            first.cell.classList.add('matched');
            second.cell.classList.add('matched');
            checkWin(size);

            selectedCells = []; 
            canSelect = true;
            isChecking = false; 
        } else {
            setTimeout(() => {
                first.cell.classList.remove('selected');
                second.cell.classList.remove('selected');
                first.cell.querySelector('img').style.display = 'none'; 
                second.cell.querySelector('img').style.display = 'none'; 

                
                selectedCells = []; 
                canSelect = true; 
                isChecking = false;
            }, 1000); 
        }
    }
});

        gameField.appendChild(gameCell); 
    }

    gameContainer.appendChild(gameField);
    milliseconds = 0; 
    timerElement.textContent = formatTime(milliseconds);
    timerInterval = setInterval(updateTimer, 10); 
    clearInterval(timerInterval);
    isPaused = false;
    timerInterval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;
            timerElement.textContent = formatTime(milliseconds); 
        }
    }, 10);
});

exitBtn.addEventListener("click", () => {
    startWindow.style.display = 'flex'; 
    gameContainer.style.display = 'none'; 
    interfaceBtn.style.display = "none"; 
    timerElement.style.display = 'none';
    selectedCells = [];
    canSelect = true;
    isPaused = true;
    milliseconds = 0;
    clearInterval(timerInterval);
    winMessage.style.display = 'none';
    pauseBtn.textContent = 'Stop';
});


pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Resume' : 'Stop';

    if (isPaused) {
        blurOverlay.style.display = 'block';
    } else {
        blurOverlay.style.display = 'none';
    }


});

restartBtn.addEventListener('click', () => {
    startWindow.style.display = 'none'; 
    gameContainer.style.display = 'flex';
    timerElement.style.display = "block";
    interfaceBtn.style.display = "block";
    winMessage.style.display = 'none';
    pauseBtn.style.display= "inline-block";
    pauseBtn.textContent = 'Stop';
    blurOverlay.style.display = 'none';
    
    clearInterval(timerInterval);
    
    milliseconds = 0;
    timerElement.textContent = formatTime(milliseconds);

    const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked');
    const difficulty = selectedDifficulty.id;

    const existingGameField = gameContainer.querySelector('.game-field');
    if (existingGameField) {
        gameContainer.removeChild(existingGameField);
    }

    const size = parseInt(fieldSelect.value);
    const gameField = document.createElement('div');
    gameField.classList.add('game-field');
    gameField.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gameField.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const gameValues = generateGameValues(difficulty, size);
    matchedPairs = 0;

    for (let i = 0; i < size * size; i++) {
        const gameCell = document.createElement('div');
        gameCell.classList.add('game-cell');

        const letter = gameValues[i % gameValues.length];
        const img = document.createElement('img');
        img.src = svgIcons[letter];
        img.alt = letter; 
        img.style.display = 'none';

        gameCell.appendChild(img);
        gameCell.addEventListener('click', () => {
   
    if (!canSelect || isChecking || gameCell.classList.contains('selected') || gameCell.classList.contains('matched')) return;

    
    gameCell.classList.add('selected'); 
    img.style.display = 'block'; 
    selectedCells.push({ cell: gameCell, letter: letter });

   
    if (selectedCells.length === 2) {
        canSelect = false; 
        isChecking = true; 
        const [first, second] = selectedCells;

       
        if (first.letter === second.letter) {
            matchedPairs++;
            first.cell.classList.add('matched');
            second.cell.classList.add('matched');
            checkWin(size); 

            selectedCells = []; 
            canSelect = true; 
            isChecking = false; 
        } else {
            setTimeout(() => {
                first.cell.classList.remove('selected');
                second.cell.classList.remove('selected');
                first.cell.querySelector('img').style.display = 'none'; 
                second.cell.querySelector('img').style.display = 'none'; 

                selectedCells = []; 
                canSelect = true;
                isChecking = false;
            }, 1000); 
        }
    }
});
        gameField.appendChild(gameCell);
    }

    gameContainer.appendChild(gameField);
    milliseconds = 0;
    timerElement.textContent = formatTime(milliseconds);
    timerInterval = setInterval(updateTimer, 10);
    clearInterval(timerInterval);
    isPaused = false;
    timerInterval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;
            timerElement.textContent = formatTime(milliseconds);
        }
    }, 10);
});