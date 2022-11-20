const squares = document.querySelectorAll('.square');

const mole = document.querySelector('.mole');

const timeLeft = document.querySelector('#time-left');

const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 5;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id
    // console.log(randomSquare);
}

randomSquare();

function moveMole() {

    timerId = setInterval(randomSquare, 500);
}
moveMole();

squares.forEach(square => {
    square.addEventListener('mouseover', function () {

        if (square.id == hitPosition) {
            result++
            // console.log(square.id,'testing');
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME IS OVER! Your Score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 500)