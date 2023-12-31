function loading() {
  const message = document.getElementById('message')
  const image = document.getElementById('image')
  
  let dataDay = new Date()
  let hour = dataDay.getHours()

  message.innerHTML = `Agora são ${hour} horas.`

  if (hour >= 0 && hour < 12) { // bom dia
    image.src = 'images/manha.jpg'
    document.body.style.background = '#b0c9d1'
  } else if (hour >= 12 && hour <= 18) { // boa tarde
    image.src = 'images/tarde.jpg'
    document.body.style.background = '#f8c06d'
  } else { // boa noite
    image.src = 'images/noite.jpg'
    document.body.style.background = '#044d77'
  }
}