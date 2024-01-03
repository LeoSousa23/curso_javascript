let initial = document.getElementById('initial')
let final = document.getElementById('final')
let step = document.getElementById('step')
const btnCount = document.getElementById('btn-count')
const result = document.getElementById('result')



btnCount.addEventListener('click', () => {
  if (initial.value.length == 0 || final.value.length == 0 || step.value.length == 0) {
    result.innerHTML = 'Impossivel contar!'
  } else {
    result.innerHTML = '<p>Contando:</p> '

    let valueInitial = Number(initial.value)
    let valueFinal = Number(final.value)
    let valueStep = Number(step.value)

    if (valueStep <= 0) {
      alert('Passo inválido! Considerando passo como sendo 1')
      valueStep = 1
    }

    if (valueInitial < valueFinal) {
      //contagem crescente
      for(let i = valueInitial; i <= valueFinal; i += valueStep) {
        result.innerHTML += ` ${i} \u{1F449}`
      }
    } else {
      //contagem decrescente
      for (let i = valueInitial; i >= valueFinal; i -= valueStep) {
        result.innerHTML += ` ${i} \u{1F449}`
      }
    }

    result.innerHTML += `\u{1f3c1}`
  }
  
})
