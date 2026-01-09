import React from 'react';
import Produto from './Components/Produto';

//Para casos de 2 ou mais nomes da classe css, utilizar camelCase
//Pois o hífen não é reconhecido como propriedade no JS
//EX: .preco-total <p classname={Styles.preco-total}>Preco</p> vai acusar erro
//Para contornar isso, deveria se passar como string pura
//EX: .preco-total <p classname={Styles['preco-total']}>Preco</p>
//Porém perderia o padrão de títulos, muitas vezes causando bugs ou divergências
//O mais correto é utilizar o camelCase
//EX: .precoTtotal <p classname={Styles.precoTotal}>Preco</p>

const App = () => {

  return (
    <div>
      <Produto />
    </div>
  )

}

export default App
