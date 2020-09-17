const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

function getRandomNumber(min = 0, max = 0) {
  return Math.floor(Math.random() * max + min)
}

function getRandomImage() {
  return `images/${diceImages[getRandomNumber(0, 6)]}`
}

function rollDice() {
  const i1 = document.querySelector('.img1')
  const i2 = document.querySelector('.img2')
  const randomNumber1 = getRandomNumber(0,6);
  const randomNumber2 = getRandomNumber(0,6);
  console.log(randomNumber1);
  console.log(randomNumber2);
  i1 && i1.setAttribute('src', 'images/'+diceImages[randomNumber1]);
  i2 && i2.setAttribute('src', 'images/' + diceImages[randomNumber2]);
  let result;
  if (randomNumber1 === randomNumber2) {
    result = 'Draw!';
  } else if (randomNumber1 > randomNumber2) {
    result = 'Player 1 Wins!';
  } else {
    result = 'Player 2 Wins!';
  }
  console.log(result);
  document.getElementById('winner').innerHTML = result;
  }
window.addEventListener('load', rollDice);

