'use strict';
//Element selector
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
//Btm
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Roll the dice
btnRoll.addEventListener('click', function () {
  //1.Generate a random number
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  //2. Display number on th dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice${diceNumber}.png`;
  //3. if the number is 1, switch to the next player.
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});
