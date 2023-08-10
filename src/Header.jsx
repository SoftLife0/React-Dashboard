import React from 'react'
 import { BsJustify } from 'react-icons/bs'
import softlife from './assets/softlife.png'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>   
        <form action="" className='d-flex'>
            <input type="text" placeholder='Search...'/>
            <button className='pill-button'>Search</button>
        </form>
        </div>
        <div className='header-right'>
        <div className='profile-details'>
                <div className='elipse'>
                    <img src={softlife} alt=""width={100}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header