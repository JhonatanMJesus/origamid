import React from 'react'
import Styles from "./Header.module.css"
import { Link } from 'react-router-dom'
import Dogs from '../Assets/dogs.svg?react'
import { UserContext } from '../context/UserContext'

const Header = () => {

  const {data} = React.useContext(UserContext);

  return (
    <header className={Styles.header}>
        <nav className={`${Styles.nav} container`}>
            <Link className={Styles.logo} to="/" aria-label='Dogs - Home'>
              <Dogs />
            </Link>
            {data ?
              <Link className={Styles.login} to="/conta">
                {data.nome}
              </Link> :
              <Link className={Styles.login} to="/login">
                Login / Criar
              </Link>
            }
        </nav>
    </header>
  )
}

export default Header