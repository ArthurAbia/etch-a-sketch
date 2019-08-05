
let makePage = () => {
  let body = document.querySelector("body");
  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("mini-container");
  let title = document.createElement("p");
  title.classList.add("title", "animated", "bounceInRight");
  title.textContent = "Etch-A-Sketch";
  buttonWrapper.appendChild(title);
  for (var j = 0; j < 4; j++){
    let button = document.createElement("button");
    button.classList.add("button");
    body.insertBefore(buttonWrapper, body.childNodes[0]);
    buttonWrapper.appendChild(button);
    console.log("Im here")
  }
  document.getElementsByClassName('button')[0].textContent = "Reset the Grid";
  document.getElementsByClassName('button')[1].textContent = "Change the Size";
  document.getElementsByClassName('button')[2].textContent = "Random Colours";
  document.getElementsByClassName('button')[3].textContent = "Shades of Red";
  for (var i = 0; i < 256; i++) {
    let container = document.querySelector(".container");
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell)
    }
}
makePage();


let makeNewPage = () => {
  document.getElementsByClassName('button')[1].addEventListener("click", function(){
  let userNumber = prompt("Combien de chiffres ami ?");
  userNumber -= 0;
  let container = document.querySelector(".container");
  container.innerHTML = "";
  for (var i = 0; i < (userNumber*userNumber) ; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell)
    }
    container.style.gridTemplateRows =  "repeat(" + userNumber + ", 1fr)";
    container.style.gridTemplateColumns =  "repeat(" + userNumber + ", 1fr)";
     let allCells = document.getElementsByClassName('cell');
     Array.from(allCells).forEach(function(cell) {
       cell.addEventListener("mouseover", function(){
         cell.style.backgroundColor = "black";
       })
     })
   })
}
makeNewPage();

let makeBlackCells = () => {
  let allCells = document.getElementsByClassName('cell');
  Array.from(allCells).forEach(function(cell) {
    cell.addEventListener("mouseover", function(){
      cell.style.backgroundColor = "black";
    })
  })
}
makeBlackCells()

let resetGrid = () => {
  document.getElementsByClassName('button')[0].addEventListener("click", function(){
    let allCells = document.getElementsByClassName('cell');
    Array.from(allCells).forEach(function(cell) {
      cell.style.backgroundColor = "white";
    })
    makeBlackCells();
  })
}
resetGrid();

let colorByRandom = () => {
  let getRandomNumber = (number) => Math.floor(Math.random() * Math.floor(number));
  document.getElementsByClassName('button')[2].addEventListener("click", function(){
    let allCells = document.getElementsByClassName('cell');
    Array.from(allCells).forEach(function(cell) {
      cell.style.backgroundColor = "white";
      cell.addEventListener("mouseover", function(){
      cell.style.backgroundColor = "rgb(" + getRandomNumber(255) + ", " + getRandomNumber(255) + ", " + getRandomNumber(255) + ")";
      })
    })
  })
}
colorByRandom();


let makeShadeCell = () => {
  document.getElementsByClassName('button')[3].addEventListener("click", function(){
    let allCells = document.getElementsByClassName('cell');
    Array.from(allCells).forEach(function(cell) {
      cell.style.backgroundColor = "white";
      cell.addEventListener("mouseover", function(){
        cell.style.backgroundColor =  "#8C1C13";
        let numberOpacity = cell.style.opacity - 0;
        numberOpacity += 0.1;
        cell.style.opacity = numberOpacity;
      })
    })
  })
}
makeShadeCell();
