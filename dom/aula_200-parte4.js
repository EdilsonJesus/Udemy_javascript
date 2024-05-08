/*
1° Passo => criar a função para que ira receber a cor como paramêtro
2° Passo => selecionar o elemento no qual a cor será aplicada "div"

*/

function modificaEstilo(cor, l, a){

  document.getElementById("elemento").style.backgroundColor = cor;
  document.getElementById("elemento").style.width = l
  document.getElementById("elemento").style.height = a
}
