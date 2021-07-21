//Put a start button
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const miss = document.querySelector('#miss')

let result = 0
let misses = 0
let hitPosition
let currentTime = 60
let timerId = null

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
    else{
      misses++
      miss.textContent=misses
    }
  })
})

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
 
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    let text = 'GAME OVER! Hits: ' + result + ' Misses: ' + misses
    timeLeft.textContent = currentTime
  }
 
 }
 
moveMole()

let countDownTimerId = setInterval(countDown, 1000)
