/* 
) Baseado no exemplo da aula "Praticando um pouco - Percorrendo e listando itens de
Arrays", implemente a mesma solução, porém utilizando o comando for.
*/

//1° metodo 
var lista_itens = ['Cadeira', 'Mesa', 'Monitor', 'Carderno'];

for(let x in lista_itens){
    //console.log('Item ' + x + ' ' + lista_itens[x]);
    console.log( lista_itens[x]);
}

// 2° Metodo
var lista_frutas = Array();
lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';
for (var i = 0; i < lista_frutas.length; i++) {
    console.log(lista_frutas[i]);
    
}