var altura = 0
var largura = 0
var vida = 1
var tempo 
var velocidade
var filt = 0

var nivel = window.location.search
nivel = nivel.replace('?', '')
dificuldade(nivel)
ajustaTamanho()


var cronometro = setInterval(function(){
    var main = document.getElementById('main')
    tempo -= 1
    filt++
    document.getElementById('cronometro').innerHTML = tempo
    main.style.transition = 1+'s'
    if( tempo === 0){
        clearInterval(cronometro)
        clearInterval(criaAlvo)
       window.location.href = '../html/vitoria.html'
    }else if(nivel === 'medio' && filt % 2 === 1 ){
        main.style.filter = 'invert(0%)'
    }else if(nivel === 'medio' && filt % 2 === 0 ){
        main.style.filter = 'invert(30%)'
    }else if(nivel === 'dificil' && filt % 2 === 1 ){
        main.style.filter = 'invert(0%)'
       
    }else if(nivel === 'dificil' && filt % 2 === 0 ){
        main.style.filter = 'invert(100%)'
    }
},1000)

function dificuldade(dificuldade){
    switch(dificuldade){
        case 'facil':
            tempo = 10
            velocidade = 2000
             break;
        case 'medio':
            tempo = 15
            velocidade = 1500
           
            break;
        case 'dificil':
            tempo = 20
            velocidade = 1000
            break;
    }
}
function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
}
function posicaoRandom(){

    if(document.getElementById('alvo')){
        document.getElementById('alvo').remove()
        if(vida > 3){
            window.location.href ='../html/fim.html'
            
        }else{
            document.getElementById('v' + vida).style.backgroundColor = 'white'
            vida++
        }
    }
    
    altura = window.innerHeight
    largura = window.innerWidth

    var posicaoX = Math.floor(Math.random()*largura)-300
    var posicaoY = Math.floor(Math.random()*altura)-300
    console.log(posicaoX, posicaoY)

    posicaoX = posicaoX <0 ? 0: posicaoX
    posicaoY = posicaoY <0 ? 0: posicaoY

    var alvo =  document.createElement('img')
    alvo.src ='../img/'+ alvoRamdom() +'.jpeg'
    alvo.className= tamanhoAlvo() +' '+ ladoRadom() + ' '+'alvo'
    alvo.style.left = posicaoX +'px'
    alvo.style.top = posicaoY + 'px'
    alvo.style.position = 'absolute'
    alvo.id = 'alvo'
    alvo.onclick = function(){
        this.remove()
    }


    document.body.appendChild(alvo)

}
function alvoRamdom(){
    alvo = Math.floor(Math.random() * 7);
    
    switch(alvo){
        case 0:
        return'angelo'
        
        case 1:
        return'gure'
        
        case 2:
        return'kevin'
        
        case 3:
        return'renan'
        
        case 4:
        return'cristian'
        
        case 5:
        return'pedroso'
        
        case 6:
        return 'elchavo'
        default:
        return 'elchavo'
    }
}
function ladoRadom(){
    alvo = Math.floor(Math.random() * 2);
    
    switch(alvo){
        case 0:
            return 'alvoLado1'
        case 1:
            return 'alvoLado2'
    }
}
function tamanhoAlvo(){
    tamanho = Math.floor(Math.random() * 3);

    switch(tamanho){
        case 0:
            return 'alvo1'
        case 1:
            return 'alvo2'
        case 2:
            return 'alvo3'
    }
}