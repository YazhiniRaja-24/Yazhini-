import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='Link'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
    </div>
  )
}

export default Nav
