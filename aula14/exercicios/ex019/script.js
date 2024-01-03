const result = document.getElementById('result')
const btnGenerate = document.getElementById('btn-generate')

 btnGenerate.addEventListener ('click', () => {
  let number = document.getElementById('number')
  let table = document.getElementById('table')

  // se o campo de numero estiver vazio ou igual a 0 ele pede pra digitar um numero, senao pega o valor
  if (number.value.length == 0){
    alert('Por favor, digite um número!')
  } else {
    let numberValue = Number(number.value)
    table.innerHTML = '' // limpa o select dps de ter sido executado uma vez 
    for(let i = 1; i <= 10; i++) {
      let option = document.createElement('option')
      option.text = `${numberValue} x ${i} = ${numberValue * i}`
      option.value = `table${i}`
      table.appendChild(option)
    }
  }
})