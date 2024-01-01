//pegar as duas telas
const screenOne = document.getElementById('screen-one')
const screenTwo = document.getElementById('screen-two')
const btnLogin = document.getElementById('btn-login')

function toggleScreen () {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

//quando o botao de login for clicado ele vai...
btnLogin.addEventListener('click', () => {
  //trocar de tela
  toggleScreen()

  //pegar o nome de usuario do form
  let firstName = document.getElementById('first-name')
  let userName = firstName.value

  //pegar o sexo do form
  let sex = document.getElementsByName('sex')
  
  //criar um elemento de imagem
  let userImage = document.createElement('img')
  userImage.setAttribute('id', 'user-image')
  
  ///verificar qual radio foi marcado no genero
  if (sex[0].checked) { //se for 0 é homem, definir imagem masculina
    userImage.setAttribute('src', 'images/man.jpg')
  } else { //se for 1 é mulher, definir imagem feminina 
    userImage.setAttribute('src', 'images/woman.jpg')
  }
  
  screenTwo.appendChild(userImage)
  screenTwo.innerHTML += '<p>Damos as boas-vindas à nossa comunidade. Aproveite todas as funcionalidades disponíveis. Em caso de dúvidas, estamos à disposição. Obrigado por se juntar a nós!</p>'
})


