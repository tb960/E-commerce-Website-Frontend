import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icons1 from '../../assets/time.png';
import icons2 from '../../assets/aff.png'
import icons3 from '../../assets/deliver.png'
import icons4 from '../../assets/Documents.png'
import './services.css';

function Reasons() {
    return(
        <div className="center justify-content-center">
        <Row>
            <Col>
                <h2 className="headingh1 heading-reason">Why Orange Express?</h2>
            </Col>
        </Row>
        <Row className ="icon">
            <Col sm={6}>
                <img className ="icon-size" src={icons1}></img>
                <h5 className="content-pad headingh5" >Unparallel Precision</h5>
                <p>Delivery within exact hourly windows</p>
            </Col>
            <Col sm={6}>
                <img className ="icon-size" src={icons2}></img>
                <h5 className="content-pad headingh5" >Affordable Flat-Fees</h5>
                <p>Zero commission or hidden charges</p>
            </Col>
        </Row>
        <Row className ="icon">
            <Col sm={6}>
                <img className ="icon-size" src={icons3}></img>
                <h5 className="content-pad headingh5" >Islandwide Delivery</h5>
                <p>Door-to-door across Singapore</p>
            </Col>
            <Col sm={6}>
                <img className ="icon-size" src={icons4}></img>
                <h5 className="content-pad headingh5" >Value Added Services</h5>
                <p>Route planning, address checking, live tracking, customer messaging</p>
            </Col>
        </Row>
        </div>
    );
}

export default Reasons