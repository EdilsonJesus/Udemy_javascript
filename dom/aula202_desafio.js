function evento(){
  document.getElementById('campo').style.backgroundColor = 'yellow';
  // document.getElementById('campo').style.backgroundColor= '';

}

// Minha solução 
 // function altera(){
 //  var campo = document.getElementById("campo");
 //  var conteudo = campo.value.trim();
 //  var tamanho = conteudo.length;
 //  if (tamanho  < 3){
 //    campo.style.backgroundColor = 'red'
 //  } else{
 //    campo.style.backgroundColor = 'green'
 //  }
 // }

// Solução do professor
function altera() {
  var valorCampo = document.getElementById('campo').value;

  if(valorCampo.length < 3 ){
    document.getElementById('campo').style.background = "red";
  } else {
    document.getElementById('campo').style.background = "green"
  }
}
