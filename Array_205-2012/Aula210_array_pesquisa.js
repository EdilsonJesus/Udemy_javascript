/*
sitanxe para pesquisa é o indexOf
*/

var lista_frutas = Array();

lista_frutas[0] = 'Uva';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Abacate';
lista_frutas[3] = 'Uva';

//console.log(lista_frutas.indexOf('Uva'))

if(lista_frutas.indexOf('Maçã') === -1){
  console.log('O Elemento não existe')
}else{
  console.log('Elemento existena posição ' + lista_frutas.indexOf('Maçã') )
}
/*
Caso exista esse elemento, retornará a posição que o elemento se encontra
caso contrario, retornará -1

Lembrando que a busca em elementos são Sensitive, precisar ser digitado
igual ao o elemento que estamos buscando.
*/
