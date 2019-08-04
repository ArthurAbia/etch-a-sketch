
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
  document.getElementsByClassName('button')[3].textContent = "Shades of Black";
  for (var i = 0; i < 256; i++) {
    let container = document.querySelector(".container");
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell)
    }
}
makePage();

let colorCells = () => {
  let allCells = document.getElementsByClassName('cell');
  Array.from(allCells).forEach(function(cell) {
    cell.addEventListener("mouseover", function(){
      cell.classList.add("blacked");
    })
  })
}
colorCells()

let resetGrid = () => {
  document.getElementsByClassName('button')[0].addEventListener("click", function(){
    let allCells = document.getElementsByClassName('cell');
    Array.from(allCells).forEach(function(cell) {
      cell.style.backgroundColor = "white";
      cell.classList.remove("blacked", "colored");
    })
  })
}
resetGrid();

let colorByRandom = () => {
  let getRandomNumber = (number) => Math.floor(Math.random() * Math.floor(number));
  document.getElementsByClassName('button')[2].addEventListener("click", function(){
    resetGrid();
    let allCells = document.getElementsByClassName('cell');
    Array.from(allCells).forEach(function(cell) {
      cell.addEventListener("mouseover", function(){
        cell.classList.add("colored");
      })
    let allColoredCells = document.getElementsByClassName('colored');
    Array.from(allColoredCells).forEach(function(cell){
      cell.style.backgroundColor = "rgb(" + getRandomNumber(255) + ", " + getRandomNumber(255) + ", " + getRandomNumber(255) + ")";
    })
    })
  })
}
colorByRandom();
