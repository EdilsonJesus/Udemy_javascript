// Lógica recuperar o Id via requisição Http
function exibirArtigo(id, callbackSucesso, callbackErro ) {
	if(true){
		callbackSucesso('Funções de callback em JS', Funções de callback ajuda para ..)
	}else{
		callbackErro('Erro ao recuperar os dados')
	}

}
	// Utilizando a tecnica wrapper
var callbackSucesso = function(titulo, descricao){
	document.write('<h1>' + titulo + '</h1>')
	document.write('<hr />')
	document.write('<p>' + descricao + '</p>')
}

var callbackErro = function(erro){
	document.write('<p> <b> Erro: </b>' + erro + '</p>')
}

// Esse trecho será executado a função declarada nas primeiras linhas de código
exibirArtigo(1, callbackSucesso, callbackErro)