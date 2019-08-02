
console.log("I work!");
let makeGrid = () => {
  let container = document.querySelector(".container");
  for (var j = 0; j < 16; j++) {
    let lineJump = document.createElement("br")
    container.appendChild(lineJump);
    console.log("I loop 1")
    for (var i = 0; i < 16; i++) {
      let cell = document.createElement("div");
      cell.classList.add("test");
      container.appendChild(cell)
    }
  }
}
makeGrid();
