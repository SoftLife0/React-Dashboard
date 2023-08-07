import React from 'react'
import logo from './assets/logo.png'
import {BiBarChartSquare, BiBookAdd, BiCategory, BiFile} from 'react-icons/bi'
import { BsFilePerson } from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={logo} alt=""/>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item-active'>
                <BiCategory className='icon'/>
                <a href="" >Dashboard</a>
            </li>
            <li className='sidebar-list-item'>
                <BiBarChartSquare className='icon'/>
                <a href="">My forms</a>
            </li>
            <li className='sidebar-list-item'>
                <BsFilePerson className='icon'/>
                <a href="">Responses</a>
            </li>
            <li className='sidebar-list-item'>
                <BiBookAdd className='icon'/>
                <a href="">Add New Form</a>
            </li>
            <li className='sidebar-list-item'>
                <BiFile className='icon'/>
                <a href="">Reports</a>
            </li>
        </ul>
    </aside>
  )
}
 
export default Sidebar