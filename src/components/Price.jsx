import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import './Container.css';



function table() {
    return(
        <div className="div-full">
            <div className="container-full"> 
            <h1 className="header-pad">Standard Charges</h1>
            <Container className="table-pad" >
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Delivery Window</th>
                    <th>Price</th>
                    <th>Min. Deliveries</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1 - 2 Hours</td>
                    <td>Contact Us</td>
                    <td>Contact Us</td>
                    </tr>
                    <tr>
                    <td>2 - 3 Hours</td>
                    <td>$7.50</td>
                    <td>$10</td>
                    </tr>
                    <tr>
                    <td>3 - 4 Hours</td>
                    <td>$6.90</td>
                    <td>10</td>
                    </tr>
                    <tr>
                    <td>> 4 Hours</td>
                    <td>$6.70</td>
                    <td>10</td>
                    </tr>
                </tbody>
            </Table>
            <p>Terms and Condition applied...</p>
            
            </Container>
        </div>
        <div className="container-full">
            <h1 className="header-pad">Surcharges</h1>
            <Container className="table-pad" >
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Service</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>CBD(MON - Sat, 8am - 8pm)</td>
                    <td>$1</td>
                    </tr>
                    <tr>
                    <td>Sentosa, Tuas and Changi Airport</td>
                    <td>$1</td>
                    </tr>
                    <tr>
                    <td>Overweight (>10kg)</td>
                    <td>$1</td>
                    </tr>
                    <tr>
                    <td>Overweight (>20kg)</td>
                    <td>Contact Us</td>
                    </tr>
                </tbody>
            </Table>
            
            </Container>
        </div>
    </div>
        
    );
}

export default table