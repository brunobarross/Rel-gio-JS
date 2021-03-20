
function carregar() {
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var minuto = data.getMinutes();
var segundos = data.getSeconds();
var titulo = document.querySelector('h1');
msg.innerHTML = `Agora são ${hora}:${minuto}:${segundos}`


  if (hora >= 0 && hora < 12) {
    img.src ='manha.jpg';
    document.body.style.background='#B1C8D2';
    titulo.style.color="#000";
  } else if (hora >= 12 && hora < 18) {
    img.src ='tarde.jpg';
    document.body.style.background='#DE894B'
    titulo.style.color="#3A1C0B";
  } else {
    img.src ='noite.jpg';
    document.body.style.background="#9577AD";
  }
}
