import React from "react";
import { Container, Row, Col, Form, Card ,Button,Nav} from "react-bootstrap";
import axios from "axios";
import '../App.css';

const Subscribe = () => {
    const subscribe = async (e) => {
        e.preventDefault();
        console.log(e.target);
        let data = {
            prescriptionId:0,
            memberId:e.target[9].value,
            memberLocation: e.target[3].value,
            policyNumber: e.target[0].value,
            insuranceProvider:e.target[8].value,
            prescriptionDate:e.target[2].value,
            drugName:e.target[4].value,
            dosageDefinition:e.target[7].value,
            quantity: e.target[5].value,
            courseDuration: e.target[6].value, 
            doctorName: e.target[1].value
       };
        console.log(data);
        axios.post("http://localhost:8082/subscriptionapi/subscribes", data, {
            headers: {
                Authorization: `Bearer${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }
        }).then((res) => {
            console.log(res.data);
            document.getElementById('display_msg').innerHTML="Subscribed Successfully!";
            
        })

    }
    return (
        
        <React.Fragment>
            <Nav.Link style={{textAlign:"right",color:"#1e40af"}} href="/getallsubs">All Subsciptions ➡️</Nav.Link>
            <main >
                <Container className="mt-0">
                    <Row className="align-items-center justify-content-center">
                        <Col md={8}>
                            <Card className="bg-white">
                                <Card.Body>
                                <Form onSubmit={subscribe}>
                    <table class="table">
                        <tbody>

                            <tr className="form-group">
                                <th>Policy Number</th>
                                <td>
                                    <input type="text" id="policyNum" name="policyNum" class="form-control" placeholder="Policy Number" pattern="[P]{1}[1-9]{1}" required></input>
                                </td>
                            </tr>
                            <tr className="form-group">
                                <th>Doctor Name</th>
                                <td><input  id="dName" name="dName" class="form-control" placeholder="Doctor Name" pattern="^[a-zA-Z_ ]*$" required/></td>
                            </tr>

                            <tr className="form-group">
                                <th>Prescription Date</th>
                                <td><input type="date" id="pDate" name="pDate"  class="form-control" placeholder="Prescription Date" max='2021-08-02' required></input></td>
                            </tr>
                            <tr className="form-group">
                                <th>Location</th>
                                <td><input type="text"id="ecity" class="form-control" placeholder="Location"  required></input></td>
                            </tr>
                            <tr className="form-group">
                                <th>Medicine Name</th>
                                <td> <input type="text"  id="medicine" class="form-control" placeholder="Medicine Name" required></input></td>
                            </tr>
                            <tr className="form-group">
                                <th>Quantity</th>
                                <td> <input type="text" id="qty" name="qty" class="form-control" placeholder="Quantity" min="1" required/></td>
                            </tr>
                            <tr className="form-group">
                                <th>Course Duration</th>
                                <td> <input type="text" id="duration" name="duration"  class="form-control" placeholder="Course Duration" min="2" required/></td>
                            </tr>
                            <tr className="form-group">
                                <th>dosageDefinition</th>
                                <td> <input type="text" id="dosageDefinition" name="dosageDefinition"  class="form-control" placeholder="dosageDefinition" min="2" required/></td>
                            </tr>


                            <tr className="form-group">
                                <th>Insurance Provider</th>
                                <td>
                                    <select  class="form-control"
                                        id="InsuranceProvider" required>
                                        <option>Choose Insurance Provider</option>
                                        <option >Aditya Brila</option>
                                        <option >Reliance</option>
                                        <option >LIC</option>
                                        
                                    </select>
                                </td>
                                </tr>
                                <tr className="form-group">
                                <th>memberId</th>
                                <td>
                                    <input type="text" id="memberId" name="memberId" class="form-control" placeholder="memberId" required></input>
                                </td>
                            </tr>

                            <br/>
                            {/* <Button to="/home" className="btn btn-dark mr-3 mt-4">Go back</Button> */}
                            <Button className="btn text-white"
                            style={{backgroundColor:"#1e40af"}} type="submit">Subscribe</Button>
                        </tbody>
                        
                    </table>
                    <div id='display_msg'>Not Yet Subscribed!</div>
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

export default Subscribe 