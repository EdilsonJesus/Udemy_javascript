var objetos = ['Cadeira', 'Impressora', 'Garfo'];

function adicionar() {
    // Recupera o valor do campo de texto
    var campo = document.getElementById('campo').value;

    // Verifica se o campo está vazio
    if (campo === "") {
        alert('Informe um valor válido');
    } else if (objetos.includes(campo)) {
        // Verifica se o objeto já foi adicionado
        alert("Objeto já foi adicionado");
    } else {
        // Adiciona o novo objeto ao array
        objetos.push(campo);
         // Debug: Verifica o conteúdo do array no console
        console.log(objetos);
        // Limpa o campo de texto
        document.getElementById('campo').value = "";
    }
}

function ordenar() {
    // Ordena o array alfabeticamente
    objetos.sort();
    // Debug: Verifica o array ordenado no console
    console.log(objetos);
}
