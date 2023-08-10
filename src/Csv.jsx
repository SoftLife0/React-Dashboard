import React from 'react'
import './App.css'
import {BiDownload} from 'react-icons/bi'

function Csv() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Upload CSV file to import data</h3>
        </div>
        <br />
        <form id="file-upload-form" className="uploader">
            <label htmlFor="file-upload" id="file-drag">
                <div className="start">
                    <BiDownload aria-hidden="true" className='csv-icon'/>
                    <h5>Select a File or kindly drag here</h5>
                    <span id="file-upload-btn" className="pill-button">Click to browse</span>
                </div>
        </label>    
        <input id="file-upload" type="file" name="fileUpload"/>
    </form>

    </main>
  )
}

export default Csv