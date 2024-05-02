
function calcularAreaTerreno (largura, comprimento){

	var area = largura * comprimento

	return area
}

var largura = prompt('digite a largura do terreno em metros');
var comprimento = promt('gidite o comprimento do terreno em metros');

var area = calcularAreaTerreno(largura, comprimento);

document.write('O terreno possui ' + area + 'metros quadrados de  comprimento')


// Lebrando que interpredador, começa procurando primeiro em sua leitura uma função, assim que 
//encontra guarda em sua mémoria. Independente onde estivesse, o resultado seria o mesmo ! 