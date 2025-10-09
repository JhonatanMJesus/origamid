import React from 'react';
import Input from './Form/input';
import Select from './Form/Select';
import Radio from './Form/Radio';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');

  return (
    <form>
      <h2>Cor</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio options={['Maçã', 'Banana', 'Melão']} value={fruta} setValue={setFruta} />

      <Select options={['smartphone', 'tablet']} value={produto} setValue={setProduto} />
      <Input id="nome" label="nome" value={nome} setValue={setNome} required />
      {nome}
      <Input id="email" label="email" value={email} setValue={setEmail} />
      {email}
      <button>Enviar</button>
    </form>
  )

}

export default App
