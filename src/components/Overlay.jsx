import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './overlay.css';

function Overlay(){
    return(
        <Container fluid>
            <div className="overlay overlay-dissapear">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="input-div">
                        <div class="input-group">
                            <div class="input-group-append">
                                <button class="btn btn-success" type="button">Merchants</button>
                            </div>
                            <input type="text" placeholder="Track your delivery" class="input-size "></input>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-div">
                        <div class="input-group">
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="button">Deliver</button>
                            </div>
                            <input type="text" placeholder="Track your delivery" class="input-size "></input>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Container>
        
    );
}

export default Overlay