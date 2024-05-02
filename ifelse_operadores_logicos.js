/*
Operadores principais 
&& (e)
|| (ou) sera verdaeiro se (true || true || false = true)
! (negação) inverte o resultado lógico da operação
*/

//Trabalhando com operador && 
if(2 == 2 && 3 >= 1 && 'a' == 'b') {
	document.write('Verdeiro')
} else {
	document.wirte('Falso')
}

// Trabalhando com OU 
if(1 == 1 || 4 >= 1 || 'a' == 'b' ) {
	document.write('Verdeiro')
} else {
	document.wirte('Falso')
}

//Trabalhando  com operador de negação
if(!(4 == 2)) {
	document.write('Verdeio')
}else{
	document.wirte('Falso')
}


var nota = prompt('Digite a nota do aluno')
var faltas = prompt('Informe as faltas do aluno')

var media = 7;
var faltas_maximas = 15

if(nota >= media && faltas <= faltas_maximas) {
	document.wirte("Aprovado")
}else {
	document.wirte("Reprovado")
}
