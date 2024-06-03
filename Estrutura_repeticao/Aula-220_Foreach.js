var lista_funcionarios = ['Pedro', 'João', 'Jose', 'Altair'];

console.log(lista_funcionarios);

// o foreach recebe uma função de CAllBACK
lista_funcionarios.forEach(function(valor, indice, array)  {
  //lógica
  console('indice: ' + indice + '| valor: ' + valor);

  //Caso encontre uma posição que quero encontrar
  if(valor == 'Altair'){
    array[indice] = 'Um novo valor' // Array ira receber um novo valor
  }
});

console.log(lista_funcionarios)
document.write('<br />' + lista_funcionarios[3])


// Essa Poderiamos atribuir uma função a uma variavél e delega-la ao forEach

// Conhecida com a tecnica warper
var lista_coisas = ['mesa', 'cadeira', 'telefone', 'computador'];

var f = function(valor, indice){
  console.log(valor, indice)
}

lista_coisas.foreach(f)

/*FOREACH atua somente em indices númericos */
