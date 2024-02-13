let inputNumber = document.querySelector('#number')
let selectList = document.querySelector('#table')
let result = document.querySelector('#result')
let btnFinish = document.querySelector('#btn-fin')
let values = []

// SE o numero for maior que 1 e menor que 10 retorne true, SENAO false
function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

// SE na lista o numero encontrado retornar diferente de -1, retorne true, SENAO false
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

// se o numero passado for numero E ele nao estiver na lista
function toAdd() {
  if (isNumber(inputNumber.value) && !inList(inputNumber.value, values)) {
    values.push(Number(inputNumber.value))
    let option = document.createElement('option')
    option.text = `Valor ${inputNumber.value} adicionado.`
    selectList.appendChild(option)
    result.innerHTML = ''
  } else {
    alert('Valor inválido ou ja encontrado na lista!')
  }
  inputNumber.value = ''
  inputNumber.focus() // faz com que o input receba o foco apos ser adicionado na lista
}

function finish() {
  if (values.length == 0) {
    alert('Adicione valores antes de finalizar!')
  } else {
    let totalValues = values.length
    let bigger = values[0]
    let smaller = values[0]
    let sum = 0
    let average = 0
    // laco de percurso que verifica um a um qual é o maior e menor
    for(let i in values) {
      sum += values[i]
      if(values[i] > bigger)
        bigger = values[i]
      if(values[i] < smaller)
        smaller = values[i]
    }
    average = sum / totalValues
    result.innerHTML = ''
    result.innerHTML += `<p>Ao todo, temos ${totalValues} números cadastrados.</p>`
    result.innerHTML += `<p>O maior valor informado foi ${bigger}.</p>`
    result.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`
    result.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
    result.innerHTML += `<p>A média de todos os valores é ${average}.</p>`
  }
}

btnFinish.addEventListener('click', finish)