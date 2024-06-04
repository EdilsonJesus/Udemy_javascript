function soma(){
    console.log(arguments);    
}

console.log(soma(7, 5, 3.2))

// Já que temos um retorno semalhante ao um Array, vamos criar uma
//outra função contendo um For, para percorrer o nosso objeto:

function teste(){
    var resultado = 0
    for(var i in arguments){
        console.log(arguments[i])
    }
}

console.log(teste(7, 5, 3.2))

// Valores recuperados, agora vamos criar uma outra funções para 
//somar esse valores com o resulto

function teste2(){
    var resultado = 0
    for(var i in arguments){
        resultado += arguments[i];
    }
    return resultado;
}

console.log(teste2(3.2, 5, 7, 0.8))