import React from 'react';
import Input from './Form/input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input id="nome" label="nome" value={nome} setValue={setNome} required />
      {nome}
      <Input id="email" label="email" value={email} setValue={setEmail} />
      {email}
      <button>Enviar</button>
    </form>
  )

}

export default App
