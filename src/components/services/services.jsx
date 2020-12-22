import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icons1 from '../../assets/pandp.svg';
import icons2 from '../../assets/Subscriptions.svg';
import icons3 from '../../assets/Cake.png';
import icons4 from '../../assets/Cake_2.png';
import './services.css';

function Services() {
    return(
        <div className="center justify-content-center">
        <Row>
            <Col>
                <h2 className="headingh1">Promised Quality Service</h2>
                <p className="headingp">Specialize in baked goods and pastries</p>
            </Col>
        </Row>
        <Row className ="icon-2">
            <Col>
                <img className ="img-size icon-size1" src={icons3}></img>
                <h5 className="heading-pad headingh5" >Cakes and Dessert</h5>
            </Col>
            <Col>
                <img className ="img-size icon-size1" src={icons4}></img>
                <h5 className="heading-pad headingh5" >Freshness Guarantee</h5>
            </Col>
        </Row>
        <Row className ="icon">
            <Col>
                <img className ="img-size icon-size" src={icons1}></img>
                <p className="heading-pad headingh5">Parcels and Packages</p>
            </Col>
            <Col>
                <img className ="img-size icon-size" src={icons2}></img>
                <p className="heading-pad headingh5" >Subscriptions</p>
            </Col>
        </Row>
        </div>
    );
}

export default Services