alert('Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.')

const tamanho= Number (prompt('Digite o tamanho da base de um retangulo'))
const altura=  Number (prompt ('Digite a altura do retangulo'))

const area = +tamanho*+altura

alert('A area do retangulo é:'+area )

const perimetro= (2*(+tamanho + +altura))


alert('A perimetro do retangulo é:'+ perimetro)

alert('fim!')