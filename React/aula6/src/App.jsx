import React from 'react';
import ButtonModal from './ButtonModal'
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(false);
  const [itens, setItens] = React.useState(['Teste']);

  function handleClick(){
    setItens([...itens, 'Outro']) ;
  }

  return (
    <div>
      <p>{itens}</p>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  )

}

export default App
