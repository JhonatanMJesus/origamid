import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if(global.produto === null) return null
  return (
    <div>
      Produto: 
      <ul>
        {global.produto.map((p) => (
          <li key={p.id}>{p.nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto