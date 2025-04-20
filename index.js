const diesArray = [];

const displayDieNum = document.querySelector(".js-display-die-num");
const displayDieImg = document.querySelector(".js-display-image");
const displayDiceImg = document.querySelector(".container");
const showDie = document.querySelector(".js-display-roll");

displayDiesStatus();

function displayDiesStatus() {
  let displayDies = "";
  diesArray.forEach((die) => {
    displayDies += `<div class="display-content">
        <div>
            <p><span class="roll-no">Roll</span>: <span class="no">${die.dieNum}</span></p>
        </div>
        <div>
            <img class="js-die-img" src="${die.dieImg}" />
        </div>
    </div>`;
  });
  setTimeout(() => {
    document.querySelector(".display-dies").innerHTML = displayDies;
  }, 4500);
}
// console.log(diesArray);
const rollDiceButton = document.querySelector(".js-roll-dice-button");

function rollDice() {
  let randomDiceNum = Math.floor(Math.random() * 6);
  if (randomDiceNum === 0) {
    randomDiceNum = 1;
  }
  // console.log(randomDiceNum);
  displayDiceImg.innerHTML = `<img class="js-display-roll rotate-image" src="/images/die-${randomDiceNum}.png" alt="" />`;

  diesArray.push({
    dieNum: randomDiceNum,
    dieImg: `/images/die-${randomDiceNum}.png`,
  });
  // console.log(diesArray);

  displayDiesStatus();
  // displayDiceImg.innerHTML = "";
}
// setTimeout(() => {
//   showDie.classList.remove("rotate-image");
// }, 2000);
rollDiceButton.addEventListener("click", () => {
  rollDice();
});
