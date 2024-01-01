let cont = 1

while (cont <= 6) { // while testa antes de executar o codigo, se a condicao for falsa ele sai do bloco de codigo
  console.log(`Passo ${cont}`)
  cont++
}

do { // do while testa depois de executar o codigo, ao menos uma vez ela será executada mesmo se a condicao for falsa
  console.log(`Passo ${cont}`)
  cont++
} while (cont <= 4)