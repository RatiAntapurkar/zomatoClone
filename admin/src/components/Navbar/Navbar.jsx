import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import profile from '../../assets/profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={profile} alt="" />
    </div>
  )
}

export default Navbar