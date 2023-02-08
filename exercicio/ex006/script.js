function carregar() {
let message = document.getElementById('message')
let photo = document.getElementById('picture')
let date = new Date()
let hour = date.getHours()
message.innerHTML = `<h2>Agora são ${hour} `
if (hour > 0 && hour < 12){
    picture.src = 'manha.jpg'
    document.body.style.backgroundColor
}else if (hour >=12 && hour < 18 ){
    picture.src = 'tarde.jpg'
    document.body.style.backgroundColor = '#b88423'
}else{
    picture.src = 'noite.jpg'
    document.body.style.backgroundColor ='#10111e'
}

}