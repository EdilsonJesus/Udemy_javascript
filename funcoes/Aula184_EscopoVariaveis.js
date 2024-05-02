/* 
O javascript tem 3 escopos:
GLOBAL 
Function
BLoCO
*/

// GLOBAL 

var filme = "Imperio" ;

// Escopo de bloco
if (true) {
	var filme2 = "Reinado" // aqui está acontencendo um "rosting"
	document.write(filme)
}

// uma variável declarada dentro do bloco é elevada para o escopo global

document.write(filme2);

document.write('<br />');

// Isso não acontece aqui, toda a variável declarada aqui, não "sobe" para o escopo GLOBAL 
function x() {
	document.write(filme)
	document.write(filme2)
	var = filme3 = "Naufrago"
}


x()