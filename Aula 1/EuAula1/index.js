
//área do texto 1
var textarea = document.getElementById("code");
//botao reset
var reset = document.getElementById("reset");
//valor escrito na área do texto 1
var code = textarea.value;
//área do texto 2
var output = document.querySelector(".output");
//botão solution
var solution = document.getElementById("solution");

//faz o texto que eu escrevo em cima ser, escrito tb em baixo
function drawOutput() {
  output.innerHTML = textarea.value;
}

//addEventListener faz com que o botão reset tenha o click
reset.addEventListener("click", function() {
  //faz a área do texto que eu escrevo em cima ser rescrito em cima
  textarea.value = code;
  //faz o texto que eu escrevo em cima ser, escrito tb em baixo
  drawOutput();
});

//addEventListener faz com que o botão solution tenha o click
solution.addEventListener("click", function() {
  //<em> linha </em> deixa a linha em itálico
  textarea.value = '<em>This is my text.</em>';
  drawOutput();
});

//o que escrito em cima é escrito em baixo
textarea.addEventListener("input", drawOutput);

window.addEventListener("load", drawOutput);
