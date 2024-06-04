var video = Array ();

video[1] = Array();
video[1]['nome'] = 'Jesus'
video[1]['categoria'] = 'Biblico'

function getVideo(video){
    
    try {
        //lógica aplicada
        //requisão http
        console.log(video[0]['nome']);
    } catch(erro){
        tratarErro(erro);
        console.log('Agora sim podemos tratar esse erro');
        throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso');
    } finally{
        console.log('Sempre passa por aqui (try / catch)');
    }

    console.log('A aplicação não morreu!');
}

function tratarErro(e){
    //lógica para registrar o erro no servidor ! 
    console.log(e);
}

getVideo(video);