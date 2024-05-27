// A estrutura é:

// for(y = 1; y <= 10; y++){
//   for(x = 1; x <= 10; x++){
//     document.write(y + 'x' + x + '=' + (y * x) + '<br />')
//   }
//
//   document.write('<hr /> ')
// }

function calcularTabuada() {
    var entrada = document.getElementById('campo').value;  // Obtém o valor do campo de entrada
    var resultado = document.getElementById('resultado');  // Obtém o elemento para mostrar o resultado

    // Verifica se a entrada é um número válido
    if (isNaN(entrada) || entrada.trim() === '') {
        resultado.innerHTML = 'Por favor, digite um número válido.';
        return;
    }

    entrada = Number(entrada);  // Converte a entrada para número
    var saida = '';  // Inicializa a variável para armazenar a tabuada

    for (var i = 1; i <= 10; i++) {
        saida += entrada + ' x ' + i + ' = ' + (entrada * i) + '<br />';
    }

    resultado.innerHTML = saida;  // Atualiza o conteúdo do parágrafo com a tabuada
}

function contarTabuada() {
    var primeira = document.getElementById('primeira').value;  // Obtém o valor do primeiro campo de entrada
    var ultima = document.getElementById('ultima').value;      // Obtém o valor do segundo campo de entrada
    var resultado = document.getElementById('final');          // Obtém o elemento para mostrar o resultado

    // Verifica se ambos os valores são números válidos
    if (isNaN(primeira) || primeira.trim() === '' || isNaN(ultima) || ultima.trim() === '') {
        resultado.innerHTML = 'Por favor, digite números válidos.';
        return;
    }

    primeira = Number(primeira);  // Converte o valor do primeiro campo para número
    ultima = Number(ultima);      // Converte o valor do segundo campo para número

    // Verifica se o valor da primeira tabuada é menor ou igual ao valor da última tabuada
    if (primeira > ultima) {
        resultado.innerHTML = 'A primeira tabuada deve ser menor ou igual à última tabuada.';
        return;
    }

    var saida = '';  // Inicializa a variável para armazenar a tabuada

    for (var i = primeira; i <= ultima; i++) {
        saida += 'Tabuada do ' + i + '<br />';
        for (var j = 1; j <= 10; j++) {
            saida += i + ' x ' + j + ' = ' + (i * j) + '<br />';
        }
        saida += '<br />';  // Adiciona uma quebra de linha extra para separar as tabuadas
    }

    resultado.innerHTML = saida;  // Atualiza o conteúdo do parágrafo com a tabuada
}
