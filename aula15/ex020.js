let num = [5,8,2,9,3]

// cria um elemento na ULTIMA poiscao do indice
num.push(1)

// coloca os elementos em ORDEM CRESCENTE
num.sort()

// descobrir o tamanho do array
console.log(`O vetor tem ${num.length} posicoes`) 

// exibindo o primeiro valor do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(num)

// percorrendo o vetor com estrutura de repeticao FOR
// for(let i = 0; i < num.length; i++) {
//   console.log('Na posicao ' + i + ' temos ' + num[i])
// }

// percorrendo o vetor com estrutura de repeticao FOR IN
for(let position in num) {
  console.log('Na posicao ' + position + ' temos ' + num[position])
}

// indexOf() faz uma pesquisa no Array e exibe a posicao onde esta
let searchNumber = num.indexOf(1)

// quando o valor passado pra ele nao é encontrado, ele retorna o valor '-1', por isso é necessario a validacao com IF e ELSE
if(searchNumber == -1) {
  console.log('O valor nao foi encontrado')
} else {
  console.log(`O valor está na posicao ${searchNumber}`)
}