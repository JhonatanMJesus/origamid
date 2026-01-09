import React from 'react'
import Styles from './Produto.module.css'

const Produto = () => {
    console.log(Styles)
  return (
    <div>
        <h1 className={Styles.titulo}>Notebook</h1>
        <p className={Styles.preco}>R$ 2000</p>
        <button className={Styles.comprar}>Comprar</button>
    </div>
  )
}

export default Produto