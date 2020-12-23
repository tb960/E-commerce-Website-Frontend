import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Singup.css';
import './jumbotron.css';

function Signup(){
    return(
        <div id="contactus">
        <div className="custom-container">
            <Jumbotron className="custom-jumbo">
                <Container>
                    <h1 class="headingh2">Ready To Join Orange Express?</h1>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSetDV8z8NcJuKUADfX_peLWBep2i1kK0qXcZxRV0b-X4e1-PA/viewform">
                        <Button className="button-size">Sign Up Today</Button>
                    </a>
                </Container>
            </Jumbotron>
        </div>
        </div>
    );
}

export default Signup