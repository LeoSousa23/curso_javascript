let inputNumber = document.querySelector('#number')
let selectList = document.querySelector('#table')
let result = document.querySelector('#result')
let values = []

const btnAdd = document.querySelector('#btn-add')

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function toAdd() {
  if (isNumber(inputNumber.value) && !inList(inputNumber.value, values)) {
    
  } else {
    alert('Valor inválido ou ja encontrado na lista!')
  }
}