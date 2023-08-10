import React, { useState, useEffect } from 'react';
import {BiCalendar} from 'react-icons/bi'
import './App.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Year() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people');
      setData(response.data.results);
      console.log (response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className='main-container'>
      <div className="main-title">
        <h3>Year Group</h3>
        <Link to="/new">
          <button className='pill-button' >Add New Year</button>
        </Link>
      </div>

      <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>2023</h3>
                <BiCalendar className='card_icon'/>
            </div>
            <div className="card-body">
              <h4>Total Alumni</h4>
              <h3>30</h3>
            </div>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>2022</h3>
                <BiCalendar className='card_icon'/>
            </div>
            <div className="card-body">
              <h4>Total Alumni</h4>
              <h3>30</h3>
            </div>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>2021</h3>
                <BiCalendar className='card_icon'/>
            </div>
            <div className="card-body">
              <h4>Total Alumni</h4>
              <h3>30</h3>
            </div>
        </div>  
        
        
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-inner">
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
        
      </div>

       
    </main>
  )
}

export default Year