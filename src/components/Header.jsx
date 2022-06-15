import React from 'react'
import '../styles/Header.scss';
import { FaCoins } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <FaCoins className='icono'/>
      <h1>cointracker</h1>
    </header>
  )
}

export default Header