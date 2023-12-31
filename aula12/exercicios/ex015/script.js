const btnCheck = document.getElementById('btnCheck')

btnCheck.addEventListener('click', () => {
  let data = new Date()
  let currentYear = data.getFullYear()
  let yearValue = document.getElementById('year')
  let result = document.getElementById('result')

  // verifica se a caixa esta vazia ou se é maior que o ano atual
  if(yearValue.value.length == 0 || Number(yearValue.value) > currentYear) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let sex = document.getElementsByName('sex') // radio do sexo
    let age = currentYear - Number(yearValue.value) //ano do sistema - o valor digitado no input
    let gender = '' // genero vazio
    let img = document.createElement('img') // crio uma tag img dinamicamente com JS
    img.setAttribute('id', 'photo') // adiciono um atributo do tipo ID com o nome 'photo'

    if (sex[0].checked) { // se o radio 1 estiver marcado, é masculino
      gender = 'Homem'

      if (age >= 0 && age < 10) { // crianca
        img.setAttribute('src', 'images/homem-bebe.jpg')
      } else if (age <= 21) { // jovem
        img.setAttribute('src', 'images/homem-jovem.jpg')
      } else if (age < 50) { // adulto
        img.setAttribute('src', 'images/homem-adulto.jpg')
      } else { // idoso
        img.setAttribute('src', 'images/homem-idoso.jpg')
      }
    } else if (sex[1].checked) { // senao se o radio 2 estiver marcado, é feminino
      gender = 'Mulher'

      if (age >= 0 && age < 10) { // crianca
        img.setAttribute('src', 'images/mulher-bebe.jpg')
      } else if (age <= 21) { // jovem
        img.setAttribute('src', 'images/mulher-jovem.jpg')
      } else if (age < 50) { // adulto
        img.setAttribute('src', 'images/mulher-adulta.jpg')
      } else { // idoso
        img.setAttribute('src', 'images/mulher-idosa.jpg')
      }
    }
    
    result.innerHTML = `Detectamos ${gender} com ${age} anos.`
    result.appendChild(img)
  }
})