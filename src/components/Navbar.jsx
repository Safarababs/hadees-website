import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="header">        

        <nav className="navbar">
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/allhadees">Read All Hadees</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;