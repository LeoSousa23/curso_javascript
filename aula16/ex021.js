// funcao com parametro
function parImpar(number) {
  if (number % 2 == 0) {
    return 'Par!'
  } else {
    return 'Impar!'
  }
}
console.log(parImpar(4)) //par


//nos parametros foi definido o valor de 0 pra caso na chamada da funcao os parametros nao sejam passados
function sum(n1=0, n2=0) { 
  return n1 + n2
}
console.log(sum(2,5)) // 7


// criei uma arrow function com variavel e atribui um valor no parametro dela
let v = (x) => {
  return x * 2
}
console.log(v(5)) // 10


function fatorial(n) {
  let fat = 1
  for(let i = n; i > 1; i--) {
    fat *= i
  }
  return fat
}
console.log(fatorial(5)) //120


// RECURSIVIDADE -> quando uma funcao chama ela mesma
function fatorial2(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial2(n-1)
  }
}
console.log(fatorial2(5)) //120