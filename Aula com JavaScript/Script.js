function exibir(){
    document.getElementById('texto').innerHTML = 'Seu mouse está sobre o texto';
}

function ocultar(){
    document.getElementById('texto').innerHTML ='';
}

function mudarCor(){
    document.getElementById('cor').style.backgroundColor = 'yellow';
}

function mudarCor(){
    let cor = document.getElementById('cor').style.color;
    if(cor === 'yellow'){
        document.getElementById('cor').style.color = 'black';
    } else {
        document.getElementById('cor').style.color = 'yellow';
    }
}

function ligar(){
    let img = document.getElementById('lamp').src;
   if(img.includes('pic_bulboff')){
       document.getElementById('lamp').src = 'img/pic_bulbon.gif';
   }else{
       document.getElementById('lamp').src = 'img/pic_bulboff.gif';
   }
}