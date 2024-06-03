// è uma ótima solução para fazer interações em Array

var lista_nomes = ['Pedro','João', 'Tiago'];

console.log(lista_nomes);

for(var x in lista_nomes){
  console.log('Indice ' +  x  + ' valor ' + lista_nomes[x])
}
