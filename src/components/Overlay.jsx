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
            <div className="overlay-comp overlay-ipad overlay-phone">
                <div class="row">
                    <div class="col-lg-6 col-sm-6">
                        <div class="input-div-comp input-div-phone">
                        <div class="input-group">
                            <div class="input-group-append">
                                <button class="btn-comp btn-comp-ipad btn-ipad btn-phone btn btn-success" type="button">Merchants</button>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="input-div-comp input-div-phone">
                        <div class="input-group">
                            <div class="input-group-append">
                                <button class="btn-comp btn-comp-ipad btn-ipad btn-phone btn btn-secondary" type="button">Drivers</button>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Container>
        
    );
}

export default Overlay