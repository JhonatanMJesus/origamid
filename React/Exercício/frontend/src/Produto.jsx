import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {
    const global = React.useContext(GlobalContext);
    console.log(global)
    if(global.produto === null) return null
  return (
    <div>Produto: {global.produto[0].nome}</div>
  )
}

export default Produto