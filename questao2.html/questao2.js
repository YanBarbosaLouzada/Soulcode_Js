alert(' Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.')
const lado = Number(prompt('digite o tamha de um lado do quadrado'))

const area= 2**+lado

const perimitro= +lado+lado+lado+lado

alert('a area do quadrado e: '+area)
alert('O perimetro é: '+perimitro)