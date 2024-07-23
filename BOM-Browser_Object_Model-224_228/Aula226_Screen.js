/* 
Seria uma ferramenta para capturar o tamanho da altura e largurar
do navedagor 
*/
var altura = screen.availHeight; 
var largura = screen.availWidth;


document.write('Largura da tela' + largura); // pode ser expandido até 1040
document.write('Altura da tela é ' + altura); // pode ser expandido até 2560

if (largura < 500){
    document.write('Lógica para impressão do menu versão mobile')
}else {
    document.write('Lógica para impressão do menu versão web')
}