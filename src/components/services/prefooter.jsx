import * as React from "react";
import icons1 from '../../assets/Cake_2.png';
import Button from 'react-bootstrap/Button';
import "./prefooter.css";

function driverCard(){
    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div>
                        <img src={icons1} alt="Avatar" style={{width:300, height:300}}></img>
                    </div>
                </div>
                <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                <Button className="button-size" variant="success">Sign Up Today</Button>
                </div>
            </div>
        </div> 
    );
}


export default driverCard