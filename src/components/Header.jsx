import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <ul className='flex items-center justify-center gap-5 py-5 font-bold'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/addCoffee'}>Add Coffee</Link>
        </li>
        <li>
          <Link to={'/signIn'}>Sign In</Link>
        </li>
        <li> 
          <Link to={'/signUp'}>SingUp</Link>
        </li>
        <li>
          <Link to={'/users'}>Users</Link>
        </li>
        <li>
          <Link to={'/users2'}>Users2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header