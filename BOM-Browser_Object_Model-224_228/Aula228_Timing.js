/* 
Trabalha com duas funções
setTimeout e setInterval
setTimeout(<ação>,<tempo em milissegundos>);//DISPARA UMA ÚNICA AÇÃO NO TEMPO INFORMADO.
 
setInterval(<ação>,<tempo em milissegundos>);//EXECUTA A AÇÃO DE FORMA CONTINUA.
*/

setTimeout(function(){console.log('Timeout Testando ...')}, 1000);


//Sintaxe 
//setInterval(function(){console.log('Interval Testando!!' + '\n')}, 2000)

var i = 5;

// Sintaxe atual
// setInterval(() => {
//    console.log(i);
//    i = i -1;
// }, 2000);

setInterval(function(){
    console.log(i);
    i -= 1;

    if(i === 0){
        //window.location.reload()// somente browser !! 
        myFunction();
    }
}, 1000)

// Podemos utilizar o ClearInterval para parar a função

var number = 1;

// Essa função irá causar a um comportamento inesperado, é somente para exemplificar 
var x = setInterval(function myFunction(){
    console.log(number);
    number += 1;
    if( number === 10){
        clearInterval(x);
    }
}, 2000)