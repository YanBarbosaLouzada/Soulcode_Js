alet('Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius')

const numeroo = Number(prompt('digite uma temperatura em fahrenheit'))

const celcio= ((+numeroo-32) * 5/9)

alert('Sua temperatura convetida a celcius:' +celcio)