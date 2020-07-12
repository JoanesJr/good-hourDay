function carregar() {
    var myBody = document.body
    var msg = document.querySelector('div#messenger')
    var image = document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    if (hour < 10) {
        hour = '0' + hour
    }
    var min = date.getMinutes()
    if (min < 10) {
        min = '0' + min
    }
    msg.innerHTML = `<p>Agora são ${hour}:${min}h</p>`
    if (hour < 12 && hour >= 5) {
        msg.innerHTML += '<p><strong>Bom dia!</strong></p>'
        image.setAttribute('src', 'asset/img/morning.jpg')
        myBody.style.background = 'rgb(252, 209, 77)'
    }else if (hour < 18 && hour >= 12) {
        msg.innerHTML += '<p><strong>Boa tarde!</strong></p>'
        image.setAttribute('src', 'asset/img/afternoon.jpg')
        myBody.style.background = '#B78F15'
    }else {
        msg.innerHTML += '<p><strong>Boa noite!</strong></p>'
        image.setAttribute('src', 'asset/img/night.jpg')
        myBody.style.background = '#546bab'
    }
    
}