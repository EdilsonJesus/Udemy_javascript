// Entrada

function solicitarDados() {
	var entrada = prompt('Qual será a sua operação: soma ou subtração ').toLowerCase();
	var num1 = parseFloat(prompt('Digite um número '));
	var num2 = parseFloat(prompt('Digite outro número '));

	calcular(num1,num2,entrada)
}

function calcular(num1, num2, entrada){
	var resultado = 0 ;

	if (entrada === "soma") {
		 resultado = num1 + num2 
	} else if (entrada === "subtração" ) {
		resultado = num1 - num2
	} else {
		document.write("Operação inválida !")
		
		return;
	}

	exibirResultado(resultado)

}

function exibirResultado(resultado) {
	document.write("O resultado é: " + resultado + ".")
}



// document.write('O resultado é: ' + resultado)

solicitarDados();