import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icons1 from '../../assets/RightOnSchedule.svg';
import icons2 from '../../assets/ReasonablePrice.svg'
import icons3 from '../../assets/Islandwide.svg'
import icons4 from '../../assets/ValueAddedServices.svg'
import Prefooter from './prefooter.jsx';
import './services.css';

function Reasons() {
    return(
        <div className="center justify-content-center">
            <h2 className="headingh1 heading-reason">Listen to our Drivers!</h2>
            <div className="card1">
                <Prefooter/>
            </div>
        </div>
    );
}

export default Reasons