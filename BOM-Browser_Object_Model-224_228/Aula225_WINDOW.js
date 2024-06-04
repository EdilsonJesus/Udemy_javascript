/*
Temos por exemplo abrir e fechar uma janela de um navegador,
para isso, precisamos de dois botões no HTML.
De acordo com sintaxe window.open trabalha com 4 parâmetros, 
todos opcionais

Já o objeto window.close, só poderar se usado se houver alguma janela
para ser usado, e, é necessario passar o objeto window.open a uma
variável, e esse variável passa-la ao objeto.close
*/

var janela

function abrirPopUp(){
    janela = windon.open('https://google.com', 'nova_janela', 'width=350, height=150')
}

function fecharPopUp(){
    janela.close()
}
