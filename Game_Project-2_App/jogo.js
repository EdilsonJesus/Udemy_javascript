// Palco do game 

// Primeiro recuperar de forma dinâmica a altura e largura do borwser

var altura = 0;
var largura = 0;

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustarTamanhoPalcoJogo()