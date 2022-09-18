alert('Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.')
const comprimento = Number(prompt('digite o comprimento da circunferencia'))

const raio = Number(prompt('digite o raio da circunferencia '))

const pi= 3.14

const perimetro= +comprimento*+raio*+pi
const area= Math.pow(+raio,2)*pi


alert('O perimetro e :'+perimetro ) 
alert('a Area é: '+area)
