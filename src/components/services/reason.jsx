import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icons1 from '../../assets/RightOnSchedule.svg';
import icons2 from '../../assets/ReasonablePrice.svg'
import icons3 from '../../assets/Islandwide.svg'
import icons4 from '../../assets/ValueAddedServices.svg'
import './services.css';

function Reasons() {
    return(
        <div className="center justify-content-center">
        <Row>
            <Col>
                <h2 className="headingh1 heading-reason">Why Orange Express?</h2>
                <p className="headingh3">By Professionals</p>
            </Col>
        </Row>
        <Row className ="icon">
            <Col>
                <img className ="reason-size" src={icons1}></img>
                <h5 className="reason-header" >On Time Delivery</h5>
                <p>Delivery within exact hourly windows</p>
            </Col>
            <Col>
                <img className ="reason-size" src={icons2}></img>
                <h5 className="reason-header" >Affordable Flat Fees</h5>
                <p>Zero commission or hidden charges</p>
            </Col>
        </Row>
        <Row className ="icon">
            <Col>
                <img className ="reason-size" src={icons3}></img>
                <h5 className="reason-header" >Islandwide Delivery</h5>
                <p>Door-to-door across Singapore</p>
            </Col>
            <Col>
                <img className ="reason-size" src={icons4}></img>
                <h5 className="reason-header" >Value Added Services</h5>
                <p>Route planning, address checking, live tracking, customer messaging</p>
            </Col>
        </Row>
        </div>
    );
}

export default Reasons