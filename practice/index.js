const rows = 30;
const cols = 50;

let playing = false;

let grid = new Array(rows);

let timer;
const reproductionTime = 300;
let currentGen = 0;

export function initializeGrids() {
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
  }
  return grid;
}

export function resetGrids() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = 0;
    }
  }
}

// Initialize
export function initialize() {
  createTable();
  initializeGrids();
  resetGrids();
  setupControlButtons();
}

// Lay out the board
export function createTable() {
  const gridContainer = document.getElementById("gridContainer");
  let table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      //
      let cell = document.createElement("td");
      cell.setAttribute("id", i + "_" + j);
      cell.setAttribute("class", "dead");
      cell.onclick = cellClickHandler;
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  gridContainer.appendChild(table);
}

export function setupControlButtons() {
  // button to start
  let startButton = document.getElementById("start");
  startButton.onclick = startButtonHandler;

  // button to clear
  let clearButton = document.getElementById("clear");
  clearButton.onclick = clearButtonHandler;

  // button to set random initial state
  let randomButton = document.getElementById("random");
  randomButton.onclick = randomButtonHandler;
}

export function randomButtonHandler() {
  if (playing) return;
  clearButtonHandler();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let isLive = Math.round(Math.random());
      if (isLive == 1) {
        let cell = document.getElementById(i + "_" + j);
        cell.setAttribute("class", "live");
        grid[i][j] = 1;
      }
    }
  }
}

// clear the grid
export function clearButtonHandler() {
  console.log("Clear the game: stop playing, clear the grid");
  currentGen = 0;

  playing = false;
  let startButton = document.getElementById("start");
  startButton.innerHTML = "Start";
  clearTimeout(timer);

  let cellsList = document.getElementsByClassName("live");
  // convert to array first, otherwise, you're working on a live node list
  // and the update doesn't work!
  let cells = [];
  for (let i = 0; i < cellsList.length; i++) {
    cells.push(cellsList[i]);
  }

  for (let i = 0; i < cells.length; i++) {
    cells[i].setAttribute("class", "dead");
  }
  resetGrids;
}

// start/pause/continue the game
export function startButtonHandler() {
  if (playing) {
    console.log("Pause the game");
    playing = false;
    this.innerHTML = "Continue";
    clearTimeout(timer);
  } else {
    console.log("Continue the game");
    playing = true;
    this.innerHTML = "Pause";
    play();
  }
}

export function updateView() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cell = document.getElementById(i + "_" + j);
      if (grid[i][j] == 0) {
        cell.setAttribute("class", "dead");
      } else {
        cell.setAttribute("class", "live");
      }
    }
  }
}

export function cellClickHandler() {
  const [row, col] = this.id.split("_");

  const classes = this.getAttribute("class");
  if (classes.includes("live")) {
    this.setAttribute("class", "dead");
  } else {
    this.setAttribute("class", "live");
  }
}

// run the life game
export function play() {
  computeNextGen();

  if (playing) {
    timer = setTimeout(play, reproductionTime);
  }
}

export function computeNextGen() {
  console.log(currentGen++);
}

// RULES
// Любая живая клетка с менее чем 2 живыми соседями - умирает. из-за недопопуляции
// Любая живая клетка с 2 или 3 живыми соседями - живет в следующем поколении
// Любая живая клетка с более чем 3 живыми соседями - умирает от перепопуляции
// Любая мертвая клетка с 3мя живыми соседями становится живой клеткой.

// Start everything
window.onload = initialize;
