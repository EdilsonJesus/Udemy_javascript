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


/*logica é 
var posicaoX = Math.random();
var posicaoY = Math.random();
*/
function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)

    //Criar o elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className =  tamanhoAleatorio() ;
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute'

    //Inserir no Body esse elemento
    document.body.appendChild(mosquito)

    
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'    
         
        case 2:
            return 'mosquito3'    
    }

}