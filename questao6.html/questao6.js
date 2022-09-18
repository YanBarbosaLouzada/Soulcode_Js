alert('Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.')
const numeroo = Number(prompt('digite um numero '))
const numeral = Number(prompt('digite outro numero   '))

const divisao= +numeroo/numeral
const resto= +numeroo%numeral

alert('O quociente e:'+divisao)
alert('o resto da divisao e ' +resto)