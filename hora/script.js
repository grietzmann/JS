function carregar(){
var msg= document.getElementById('msg')
var img= document.getElementById('imagem')
var data= new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
    if (minuto < 10){
    minuto = "0" + minuto
}
msg.innerHTML = `Agora são ${hora}:${minuto}h.`
if(hora >= 0 && hora<12){
    //Bom dia
img.src= 'img/manha.jpg'
document.body.style.background='#4B9093'
}else if (hora >=12 && hora<18){
    //Boa tarde
img.src='img/tarde.jpg'
document.body.style.background='#4B9093'
}else{
    //Boa Noite
img.src='img/noite.jpg'
document.body.style.background='#4B5874'
}

}