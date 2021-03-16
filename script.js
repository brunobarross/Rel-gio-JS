
function carregar() {
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas`
var fundo = document.querySelector('body')


  if (hora >= 0 && hora < 12) {
    img.src ='manha.jpg';
    fundo.style.background='blue';
  } else if (hora >= 12 && hora < 18) {
    img.src ='tarde.jpg';
    fundo.style.background='purple';
  } else {
    img.src ='noite.jpg';
    fundo.style.background='black';
  }
}
