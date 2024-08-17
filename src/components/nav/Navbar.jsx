import React from 'react'
import "./Navbar.css"
import logo from "../../assets/images/logo.svg"
import arrow__down from "../../assets/images/arrow__down.svg"
import search from "../../assets/images/search.svg"
import basket from "../../assets/images/basket.svg"
import login from "../../assets/images/login.svg"

const Nav = () => {
  return (
    <>
        <nav>
            <div className="container">
                <div className="navbar__wrapper">
                  <img style={{cursor: "pointer"}} src={logo} alt="" />
                  <ul className='navbar__list' >
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Menu <img src={arrow__down} alt="" /></a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                  <div className='navbar__action' >
                    <img src={search} alt="" />
                    <img src={basket} alt="" />
                    <button className='navbar__login-button' ><img src={login} alt="" />Login</button>
                  </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav
