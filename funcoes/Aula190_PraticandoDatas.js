var data = new Date()

// adicionando / remover dias

document.write(data.toString())
data.setDate(data.getDate() + 720)
document.write('<hr />')
document.write(data.toString())
document.write('<br /><hr />')

//adicionar / remover meses
document.write(data.toString())
data.setMonth(data.getMonth() + 720)
document.write('<hr />')
document.write(data.toString())
document.write('<br /><hr />')


//adicionar / remover anos
document.write(data.toString())
data.setFullYear(data.getFullYear() + 720)
document.write('<hr />')
document.write(data.toString())
document.write('<br /><hr />')

//15/01/2017

var data1 = new Date(2017, 0, 15)

//23/03/2017
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write('<hr />')
document.write(data2.toString())
document.write('<br /><hr />')

// vamos converter datas para algo que podemos calcular
document.write(data1.getTime())
document.write('<hr />')
document.write(data2.getTime())

document.write('<br /> <br /><hr />')


//Sistmas Unix se baseiam na data de 1 de janeiro de 1970

//Agora Vamos encontrar a quantidade de milissegundos entre data1 e data2
document.write(data1.getTime() - data2.getTime())
document.write('<br /><hr />')

//Vamos converter o valor retornado em número Positivo
var milissegundosEntreDatas = Math.abs((data1.getTime() - data2.getTime()))
document.write(milissegundosEntreDatas)

/*
1 dia tem 24 horas,
Cada hora tem 60 minutos,
Cada minuto tem 60 segundos,
Cada segundo tem 1000 milissengundos
 */
 // Quantos milissengundos existem em 1 dia ? 
 var milissegundosPorDia = (1*24*60*60*1000)
 document.write(' 1 dia tem :' + milissegundosPorDia + ' milissegundos')

 document.write('<br /><br /><hr />')
 document.write('A diferença entre data1 e data2 é de ' + Math.ceil(milissegundosEntreDatas / milissegundosPorDia) + ' dia(s) ')