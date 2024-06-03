/* 
Baseado no exemplo da aula "Praticando um pouco - Criando uma 
tabuada de 1 a 10 (laços encadeados)", implemente a mesma solução,
 porém utilizando o comando while.
*/


// Minha implementação
var y = 1;


while (y <= 10){
    var x = 1;
    while(x <= 10){
        console.log(y  + 'X' +  x + '=' + (y * x) + '\n');
        x ++;
    
    }
    y ++;
    
}

console.log('---================================------')
console.log('Alternativa 2')

var a = 1;
var b = 1;

while(a <= 10){
    b = 1;
    while(b <= 10){
        console.log(a + 'x' + b + '=' + a * b);
        b++;
    }
    console.log('\n');
    a++;
}