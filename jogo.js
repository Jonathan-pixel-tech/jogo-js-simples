// recupera altura e largura para criação dos elementos na tela
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var tempoCriacaoMosca = 0

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    tempoCriacaoMosca = 2000
}else if(nivel === 'medio'){
    tempoCriacaoMosca = 1500
}else{
    tempoCriacaoMosca = 1000
}


redimensionaJogo()

var criaMosca = setInterval(function(){apareceMosca()}, tempoCriacaoMosca )

var cronometro = setInterval(function(){
    tempo -= 1
    if (tempo<0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('crono').innerHTML = tempo
    }
    
}, 1000)


function apareceMosca() {

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        if (vidas>3) {
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'imagens/imagens/coracao_vazio.png'
            vidas++
        }
    }


    // cria as coordenadas de criação do elemento
    var posicaox = Math.floor(Math.random() * largura) - 100
    var posicaoy = Math.floor(Math.random() * altura) - 100

    posicaox = (posicaox < 0) ? 0 : posicaox
    posicaoy = (posicaoy < 0) ? 0 : posicaoy


    // cria o elemenro HTML
    var mosca = document.createElement('img')
    mosca.src = 'imagens/imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaox + 'px'
    mosca.style.top = posicaoy + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosca)
}

function tamanhoAleatorio() {
    var r = Math.floor(Math.random() * 3)

    switch (r) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var r = Math.floor(Math.random() * 2)

    if (r === 1) {
        return 'ladoA'
    } else {
        return 'ladoB'
    }
}

function redimensionaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

}