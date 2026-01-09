import React from 'react';
//No css a ordem importa, temos um conflito de classes pois utilizamos o mesmo nome
//tanto no App.css quanto no Title.css. Para garantir que não haverá conflitos
//É recomendado que cada nome de classe comece com o nome do componente. Ex: AppH1 ou TitleH1

import Title from './Title'
//Como title foi importado primeiro, ele pegou a cor tomato da letra
import "./App.css";
//Porém no App.css há um novo valor para color de h1, sobrepondo o valor que ele deveria ser

const App = () => {

  return (
    <div className='container'>
      <Title />
    </div>
  )

}

export default App
