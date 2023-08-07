document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

function randomDiceNumber(randomNumber1, randomNumber2) {
  const randomImg1 = [];
  randomNumber1 = Math.floor(Math.random() * 6);
  //console.log(randomNumber1);

  for (let i = 1; i <= 6; i++) {
    randomImg1.push(`./images/dice${i}.png`);
  }
  document
    .querySelector(".img1")
    .setAttribute("src", randomImg1[randomNumber1]);

  const randomImg2 = [];
  randomNumber2 = Math.floor(Math.random() * 6);
  //console.log(randomNumber2);

  for (let i = 1; i <= 6; i++) {
    randomImg2.push(`./images/dice${i}.png`);
  }
  document
    .querySelector(".img2")
    .setAttribute("src", randomImg2[randomNumber2]);

  if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 win!";
    } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

randomDiceNumber();
