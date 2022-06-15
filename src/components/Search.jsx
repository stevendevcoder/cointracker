import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import '../styles/Search.scss'

function Search({doConsult}) {
  const [term, setTerm] = useState('')

  const handleChange = (e) => {
    setTerm(e.target.value)
    doConsult(term)
  } 
  return (
    <div>
      <input 
        type="text"
        placeholder='Busca una cripto'
        onChange={handleChange} 
      />
      <FaSearch className='btn-search'></FaSearch>
    </div>
  )
  
}
export default Search