import React from 'react'
import { Col, Container, Form, Row, Card, Button, Table, Navbar } from 'react-bootstrap';
import axios from "axios";
import { Navigate } from 'react-router-dom';

function GetRefills() {

    const [refillID, setRefillID] = React.useState({
        refillID: ""
    })

    const [show, setShow] = React.useState(false)

    const [refDetails, setrefDetails] = React.useState({
        data: null
    })
    
    const fetchData = async () => {
        
        try {
            const res = await axios.get(`http://localhost:8454/refillappdb/viewRefillStatus/${refillID.Id}`, {
                method: "get",
                url: `http://localhost:8454/refillappdb/viewRefillStatus/${refillID.Id}`,    
            headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                     "Content-Type": "application/json",
                 }
              })
            
            console.log(res);
            
            if (res.status === 200) {
                setrefDetails({ data: res.data })
                setShow(true)
            }
        }
        catch (err) {
            console.log(err)
            if (err.response.status === 404) {
                alert(err.response.data)
                setShow(false)
                setrefDetails({ data: null })
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
                                    value={refillID.Id} required
                                    placeholder='Enter Refill ID'
                                    onChange={(e) => setRefillID((prevState) => ({
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
            {refDetails.data != null ? (
            <div>
<Row className='mt-4'>
    <Col md={12}>
        <Card>
            <Card.Body>
                <Table striped bordered hover variant='light'>
                    <thead>
                        <tr>
                        <th >memberID</th>
                        {/* <th >payStatus</th> */}
                        <th>quantity</th>
                        <th >refillDate</th>
                        <th >refillID</th>
                        <th >subID</th>
                        {/* <th>Location - Quantity</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        
                        {refDetails.data.map((ref) => (
                            <tr>
                                <td>{ref.memberID}</td>
                                {/* <td>{ref.payStatus}</td> */}
                                <td>{ref.quantity}</td>
                                <td>{ref.refillDate}</td>
                                <td>{ref.refillID}</td>
                                <td>{ref.subID}</td>
                               </tr>))}
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
    

export default GetRefills


