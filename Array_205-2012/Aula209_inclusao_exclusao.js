var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'

//incluir elmentos no final do array
lista_frutas.push('Uva');
//lista_frutas.includes('Limão');

//Incluir elementos no inicio do array
lista_frutas.unshift('Melão')

//Excluir elemento do final do array
lista_frutas.pop()

//excluir elemento do inicio do Array
lista_frutas.shift()

console.log(lista_frutas);

var lista_coisas = Array()

lista_coisas['livros'] = Array();
lista_coisas['filme'] = [];

lista_coisas['livros'].push('Nos passos de Jesus', 'Casamento Blindado');
lista_coisas['livros'].unshift('Introdução a Lógica', 'Javascript');

lista_coisas['filme'].push('007', 'Missão Impossível')
lista_coisas['filme'].unshift('O mascara', 'Dexter')

console.log(lista_coisas)
