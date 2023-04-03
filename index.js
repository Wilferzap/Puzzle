const row = 4;
const columns = 4;

var currTitle;
var otherTitle;

var turn = 0;

function refrescar() {
  location.reload();
}

let solution = [
  "1.gif",
  "2.gif",
  "3.gif",
  "4.gif",
  "5.gif",
  "6.gif",
  "7.gif",
  "8.gif",
  "9.gif",
  "10.gif",
  "11.gif",
  "12.gif",
  "13.gif",
  "14.gif",
  "15.gif",
  "16.gif",
];

let imgs = document.getElementById("board").getElementsByTagName("img");

window.onload = function () {
  //inicializa la tabla 4x4
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < columns; c++) {
      //<img>
      let w = document.createElement("img");
      w.src = "./imagenes/white.gif";

      //id

      // Drag Functionality
      w.addEventListener("dragstart", dragStart);
      w.addEventListener("dragover", dragOver);
      w.addEventListener("dragenter", dragEnter);
      w.addEventListener("dragleave", dragLeave);
      w.addEventListener("drop", dragDrop);
      w.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(w);
    }
  }

  //pices

  let pices = [];
  for (let i = 1; i <= row * columns; i++) {
    pices.push(i.toString()); // ponemos "1" hasta "16" dendro de una lista (nombres de las imagenes)
  }

  // gnerar un numero aleatorio para cambi de posicion de las imagenes

  for (let i = 0; i < pices.length; i++) {
    let j = Math.floor(Math.random() * pices.length);

    //swap o cambio de posicion en si

    let final = pices[i];
    pices[i] = pices[j];
    pices[j] = final;
  }
  //////////////////////////
  for (let i = 0; i < pices.length; i++) {
    let photos = document.createElement("img");
    photos.src = "./imagenes/" + pices[i] + ".gif";

    // Drag Functionality
    photos.addEventListener("dragstart", dragStart);
    photos.addEventListener("dragover", dragOver);
    photos.addEventListener("dragenter", dragEnter);
    photos.addEventListener("dragleave", dragLeave);
    photos.addEventListener("drop", dragDrop);
    photos.addEventListener("dragend", dragEnd);

    document.getElementById("pices").append(photos);
  }
};

//Definimos las funciones

function dragStart() {
  currTitle = this; // hace referencia a la imagen actual que se clickea
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}
function dragDrop() {
  otherTitle = this; //hace referencia a la imagen que se cambiaria
}
function dragEnd() {
  if (currTitle.src.includes("white")) {
    return;
  }

  let currImg = currTitle.src;
  let otherImg = otherTitle.src;

  currTitle.src = otherImg;
  otherTitle.src = currImg;

  turn += 1;
  document.getElementById("turns").innerText = turn;

  let allCorrect = true;
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src.split("/").pop() !== solution[i]) {
      allCorrect = false;
      break;
    }
  }

  if (allCorrect) {
    alert("¡Felicidades, has completado el puzzle!");
  }
}

/// animacion del texto
span1 = new TypeIt("#myElement", {
  strings:
    "Starts the game... Every time you move a tile, it will be added in the number of moves ",
}).go();
