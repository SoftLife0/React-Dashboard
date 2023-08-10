import React from 'react'
import './App.css'
import {BiBarChartSquare, BiCalendarExclamation} from 'react-icons/bi'
import { BsFilePerson } from 'react-icons/bs'
import { Link } from 'react-router-dom';
// import LineChartComponent from './linecharts'

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>
        
        <div className='main-cards'>
            <Link to=''>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>MY FORMS</h3>
                        <BiBarChartSquare className='card_icon'/>
                    </div>
                    <h3>30</h3>
                </div>
            </Link>
            <Link to='#'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>RESPONSES</h3>
                        <BsFilePerson className='card_icon'/>
                    </div>
                    <h3>25</h3>
                </div>
            </Link>
            <Link to='#'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>COMPLAINTS</h3>
                        <BiCalendarExclamation className='card_icon'/>
                    </div>
                    <h3>10</h3>
                </div>
            </Link>
            
        </div>

        {/* <div className='charts'>
            <div className='main-title'>
                <h3><b>Metrics</b></h3>
            </div>
            <LineChartComponent/>

        </div> */}
    </main>
  )
}

export default Home