var nome = prompt('Informe o seu nome: ');
var altura = prompt('Informe a sua Altura em Centimetros: ');
var peso = prompt('informe o seu peso :')


altura = parseFloat(altura);
peso = parseFloat(peso);

altura = altura / 100;
var inf = "";


var MMC = peso / (altura * 2);

if (MMC < 16) {
	inf = 'Baixo dpeso muito GRAVE'
}
else if (MMC >= 16 && MMC <= 16,99) {
	inf = 'Baixo peso grave'
}
else if (MMC >= 17 && MMC <= 18,49) {
	inf = 'Baixo peso'
}
else if (MMC >= 18,50 && MMC <= 24,99) {
	inf = 'Peso Normal'
}
else if (MMC >= 25 && MMC <= 29,99){
	inf = 'Sobre Peso'
}
else if (MMC >= 30 && MMC  <= 34,99) {
	inf = 'Obesidade grau |'
}
else if (MMC >= 35 && MMC <= 39,99) {
	inf = 'Obesidade grau ||'
}
else {
	inf = 'Obesidade grau |||'
}



document.write(nome + ' possui índece de massa corporal igual a ' + MMC + ' Sendo classificado como :' + inf)