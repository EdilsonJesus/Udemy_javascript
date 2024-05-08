var idade = prompt("Informe sua idade");

if(idade <= 15 ) {
	alert("Criança")
}
if(idade >= 16 && idade <= 29) {
	alert('Jovem')
}
if(idade >= 30 && idade <= 59){
	alert("Adulto")
}
else {
	alert("idoso")
}