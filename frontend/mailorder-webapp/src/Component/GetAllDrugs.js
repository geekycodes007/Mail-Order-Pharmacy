import React from 'react'
import { Col, Container, Form, Row, Card, Button, Table, Navbar,Nav } from 'react-bootstrap';
import axios from "axios";
import { Navigate } from 'react-router-dom';
// import {Navigation} from "./Navigation"
function GetAllDrugs() {

    // const [employeeId, setEmployeeId] = React.useState({
    //     Id: ""
    // })

    const [show, setShow] = React.useState(false)

    const [drugDetails, setdrugDetails] = React.useState({
        data: null
    })
    
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8081/drugdetailapp/getAllDrugs`)
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
    //     fetchData()

    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData()
    }
    return (
        <div>
            
                <div>
                    <main className='mt-3'>
                    {/* <Button className='btn-secondary' onClick={(e) => handleSubmit(e)} type="submit">Get All Drugs</Button>
                    <Button href='/getalldrugsbyid' className='btn-secondary' type="submit">Get By Drug ID</Button>
                    <Button className='btn-secondary' type="submit">Get By Drug Name</Button> */}
                    <br/>
            <Navbar style={{width:"70vw",margin:"auto",borderRadius:"10px",backgroundColor:"#d1d5db"}} >
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{margin:"auto"}} >
        <Nav.Link onClick={(e) => handleSubmit(e)} type="submit">Get All Drugs</Nav.Link>
        <Nav.Link href='/getalldrugsbyid'>Drugs By ID</Nav.Link>
        <Nav.Link href='/getalldrugsbyname'>Drugs By Name</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
            </Navbar>
            <Container>
            <div>
            {drugDetails.data != null ? (
            <div>
        <Row className='mt-4'>
            <Col md={14}>
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
                                <th>Location - Stocks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {drugDetails.data.map((drug) => (
                                    <tr>
                                        <td>{drug.drugId}</td>
                                        <td>{drug.drugName}</td>
                                        <td>{drug.manufacturer}</td>
                                        <td>{drug.manufactureDate}</td>
                                        <td>{drug.expiryDate}</td>
                                    <td>{drug.druglocationQuantities.map((sub)=>
                                        <td className='data'>{sub.location.split(' ').map((location) => (
                                            <ul><li className='data_li'>{location} - Qty: {sub.quantity}</li></ul>
                                          ))}</td>
                                    )}</td>
                                    </tr>
                                    
                                ))}
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

export default GetAllDrugs