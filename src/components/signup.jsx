import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Singup.css';
import './jumbotron.css';

function Signup(){
    return(
        <div>
        <div className="custom-container">
            <Jumbotron className="custom-jumbo">
                <Container>
                    <h1 class="headingh2">Ready To Join Orange Express?</h1>
                    <Button className="button-size">Sign Up Today</Button>
                </Container>
            </Jumbotron>
        </div>
        </div>
    );
}

export default Signup