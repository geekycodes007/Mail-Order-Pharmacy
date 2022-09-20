import React from "react";
import { Container, Row, Col, Form, Card ,Button,Nav} from "react-bootstrap";
import axios from "axios";
import '../App.css';


const Refill = () => {
    const refill = async (e) => {
        e.preventDefault();
        console.log(e.target);
        let data = {
            policyID: e.target[0].value,
            subID:parseInt(e.target[1].value),
            memberID:e.target[2].value,
            location: e.target[3].value,
            quantity: parseInt(e.target[4].value),
            
       };
        console.log(data);
        axios.post("http://localhost:8454/refillappdb/requestAdhocRefill",data,  {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }
        }).then((res) => {
            console.log(res.data);
            document.getElementById('success_msg').innerHTML="Refill Requested Successfully!";
            
        })

    }
    return (
        
        <React.Fragment>
            <main >
                <Container className="mt-0">
                    <Row className="align-items-center justify-content-center">
                        <Col md={8}>
                            <Card className="bg-white">
                                <Card.Body>
                                <Form onSubmit={refill}>
                    <table class="table">
                        <tbody>
                        <tr className="form-group">
                                <th>Policy Number</th>
                                <td>
                                    <input type="text" id="policyNum" name="policyNum" class="form-control" placeholder="Policy Number" pattern="[P]{1}[1-9]{1}" required></input>
                                </td>
                            </tr>
                            <tr className="form-group">
                                <th>subId</th>
                                <td>
                                    <input type="number" id="subId" name="subId" class="form-control" placeholder="subId"  required></input>
                                </td>
                            </tr>
                            <tr className="form-group">
                                <th>memId</th>
                                <td>
                                    <input type="text" id="memId" name="memId" class="form-control" placeholder="memId"  required></input>
                                </td>
                            </tr>
                            <tr className="form-group">
                                <th>Location</th>
                                <td><input type="text"id="ecity" class="form-control" placeholder="Location"  required></input></td>
                            </tr>
                            
                            <tr className="form-group">
                                <th>Quantity</th>
                                <td> <input type="number" id="qty" name="qty" class="form-control" placeholder="Quantity" min="1" required/></td>
                            </tr>
                            <br/>
                            <Button className="btn text-white"
                            style={{backgroundColor:"#1e40af"}} type="submit">Request</Button>
                        </tbody>
                        
                    </table>
                    <div id='success_msg'>Not Yet Requested!</div>
                </Form>
                
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </main>
        </React.Fragment>
    )
}

export default Refill 