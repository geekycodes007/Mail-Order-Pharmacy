import React from 'react'
import { Col, Container, Form, Row, Card, Button, Table, Navbar } from 'react-bootstrap';
import axios from "axios";
import { Navigate } from 'react-router-dom';

function GetDrugsId() {

    const [drugId, setDrugId] = React.useState({
        Id: ""
    })

    const [show, setShow] = React.useState(false)

    const [drugDetails, setdrugDetails] = React.useState({
        data: null
    })
    
    const fetchData = async () => {
        
        try {
            const res = await axios.get(`http://localhost:8081/drugdetailapp/searchDrugsById/${drugId.Id}`, {
                method: "get",
                url: `http://localhost:8081/drugdetailapp/searchDrugsById/${drugId.Id}`,    
            headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                     "Content-Type": "application/json",
                 }
              })
            
            console.log(res);
            
            if (res.status === 200) {
                setdrugDetails({ data: res.data })
                setShow(true)
            }
        }
        catch (err) {
            console.log(err)
            if (err.response.status === 404) {
                alert(err.response.data)
                setShow(false)
                setdrugDetails({ data: null })
            }
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData()
    }
    
    return (
        <div>
        <div>
            <main className='mt-3'>
            <Container>
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Body>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-3">
                                <Form.Control type='text' name="Id"
                                    value={drugId.Id} required
                                    placeholder='Enter Drug ID'
                                    onChange={(e) => setDrugId((prevState) => ({
                                        ...prevState,
                                        Id: e.target.value,
                                    }))} />
                            </Form.Group>
                            <Button className="btn text-white"
                    style={{backgroundColor:"#1e40af"}} type="submit">Get</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row> 
        </Container>
            <Container>
            <div>
            {drugDetails.data != null ? (
            <div>
<Row className='mt-4'>
    <Col md={12}>
        <Card>
            <Card.Body>
                <Table striped bordered hover variant='light'>
                    <thead>
                        <tr>
                        <th >Drug ID</th>
                        <th >Drug Name</th>
                        <th>Manufacture By</th>
                        <th >Manufacture Date</th>
                        <th >Expiry Date</th>
                        {/* <th>Location - Quantity</th> */}
                        </tr>
                    </thead>
                    <tbody>
                
                            <tr>
                                <td>{drugDetails.data.drugId}</td>
                                <td>{drugDetails.data.drugName}</td>
                                <td>{drugDetails.data.manufacturer}</td>
                                <td>{drugDetails.data.manufactureDate}</td>
                                <td>{drugDetails.data.expiryDate}</td>
                                
                            </tr>
                        
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Col>
                        </Row>
                    </div>
                    
                        ) : (
                            <div>
                                <br/>
                                <br/>
                                <p>Data <span>loading..</span></p>
                                
                            </div>
                        )}
                    </div>
            </Container>
                    </main>
    
                </div>
            
        </div>
    )
    }
    

export default GetDrugsId


