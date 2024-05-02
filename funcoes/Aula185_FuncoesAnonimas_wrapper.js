
// uma função anonima pode ser simplesmente criada da seguinte forma:


function(){
	// alguma lógica ...
}

// mais para chamar como ficaria... vamos guardar essa função em uma variável

var exibirSaudacao = function(nome){
	document.write('Olá ' + nome + ' , tudo bem? ')
}

exibirSaudacao('Jorge');

// O Javascript permite atribuir (guardar) funções em variáveis