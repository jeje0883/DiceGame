function loadDice(){
  let rand1 = Math.floor(6 * Math.random()) + 1;
  let img1 = "./images/dice" + rand1 + ".png";
  document.querySelector(".img1").setAttribute("src", img1);

  let rand2 = Math.floor(6 * Math.random()) + 1;
  let img2 = "./images/dice" + rand2 + ".png";
  document.querySelector(".img2").setAttribute("src", img2);
  
  winner = rand1 - rand2;

  if (winner < 0){
    document.querySelector("h1").innerHTML = "Player 2 Wins &#128681"
  } else if (winner > 0) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins";
  } else {
    document.querySelector("h1").innerText = "Draw!";
  }
}
