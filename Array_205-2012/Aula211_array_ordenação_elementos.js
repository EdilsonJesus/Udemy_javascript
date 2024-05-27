var lista_frutas = []

lista_frutas[0] = 'Uva'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Limão'

console.log(lista_frutas)
// Metodo sort() Ordena de forma alfabetica os elementos

console.log(lista_frutas.sort())

/*
 Se a for uma array númerico, é necessário criar uma função
 passando a,b, e retornando esse contexto dentro do patamentro sort()
*/

var number = Array()

number[0] = 10
number[1] = 118
number[2] = 2
number[3] = 41
number[4] = 55

console.log(number.sort())

console.log(number.sort(ordenaNumeros))
//Criando a função

function ordenaNumeros(a,b){
  return a - b
}
