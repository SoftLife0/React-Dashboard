import React from 'react'
import './App.css'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Newfom() {
  return (
    <main className='main-container'>
        <div className="main-title">
            <h3>Add New Year Group</h3>
        </div>
        <br />
        
        <Row className="g-2">
            
            <Col md>
                <FloatingLabel controlId="floatingSelectGrid"  label="Select new year group">
                <Form.Select>
                    <option>Select new year group</option>
                    <option value="1">2024</option>
                    <option value="2">2023</option>
                    <option value="3">2022</option>
                </Form.Select>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Input total number of alumni">
                <Form.Control type="number" placeholder="Input total number of alumni" size='lg'></Form.Control> 
                </FloatingLabel>
            </Col>
        </Row>
        <br />
        <button className='pill-button'>Submit</button>
    </main>
  )
}

export default Newfom