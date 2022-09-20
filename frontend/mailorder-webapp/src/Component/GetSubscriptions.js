import React from 'react'
import { Col, Container, Form, Row, Card, Button, Table, Navbar,Nav } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetSubscriptions() {

    const navigate = useNavigate();

    // const [prescriptionId, setPrescriptionId] = React.useState({
    //     Id: ""
    // })

    const [show, setShow] = React.useState(false)

    const [subDetails, setsubDetails] = React.useState({
        data: null
    })
    const fetchData = async () => {
        
        try {
            const res = await axios.get(`http://localhost:8082/subscriptionapi/getAllSubscriptions`, {
                method: "get",
                url: `http://localhost:8082/subscriptionapi/getAllSubscriptions`,    
            headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                     "Content-Type": "application/json",
                 }
              })
            
            console.log(res);
            
            if (res.status === 200) {
                setsubDetails({ data: res.data })
                setShow(true)
            }
        }
        catch (err) {
            console.log(err)
            if (err.response.status === 404) {
                alert(err.response.data)
                setShow(false)
                setsubDetails({ data: null })
                alert("Check whether the Stocks available!")
            }
        }
    }
    // const Del = async () => {
        
    //     try {
    //         const res = await axios.post(`http://localhost:8082/subscriptionapi/unsubscribe/${prescriptionId.Id}`, {
    //             method: "post",
    //             url: `http://localhost:8082/subscriptionapi/unsubscribe/${prescriptionId.Id}`,    
    //         headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //                  "Content-Type": "application/json",
    //              }
    //           })
            
    //         console.log(res);
            
    //     }
    //     catch (err) {
    //         console.log(err)
    //         if (err.response.status === 404) {
    //             alert(err.response.data)
    //         }
    //     }
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData()
    }
    const refill = (prescriptionId) => {
        navigate(`/refill/${prescriptionId}`);
      }
    
    return (
        <div>
            
        <div>
            <main className='mt-3'>
            <Navbar style={{width:"70vw",margin:"auto",borderRadius:"10px",backgroundColor:"#d1d5db"}} >
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{margin:"auto"}} >
        <Nav.Link onClick={(e) => handleSubmit(e)} type="submit">Show All</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
            </Navbar>
    <Container>
    <div>
    {subDetails.data != null ? (
    <div>
<Row className='mt-4'>
    <Col md={14}>
        <Card>
            <Card.Body>
                <Table striped bordered hover variant='light'>
                    <thead>
                        <tr>
                        <th >Prescription Id</th>
                        <th >Member Id</th>
                        <th>Member Location</th>
                        <th >Policy Number</th>
                        <th >InsuranceProvider</th>
                        <th>Prescription Date</th>
                        <th>DrugName</th>
                        {/* <th>dosageDefinition</th> */}
                        <th>Quantity</th>
                        <th>course</th>
                        <th>Doctor Name</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subDetails.data.map((sub) => (
                            <tr>
                                <td>{sub.prescriptionId}</td>
                                <td>{sub.memberId}</td>
                                <td>{sub.memberLocation}</td>
                                <td>{sub.policyNumber}</td>
                                <td>{sub.insuranceProvider}</td>
                                <td>{sub.prescriptionDate}</td>
                                <td>{sub.drugName}</td>
                                {/* <td>{sub.dosageDefinition}</td> */}
                                <td>{sub.quantity}</td>
                                <td>{sub.courseDuration}</td>
                                <td>{sub.doctorName}</td>
                                <td> <button
                      onClick={() => refill(sub.prescriptionId)}
                      className="btn text-white"
                            style={{backgroundColor:"#1e40af"}}
                    >
                      Request
                    </button> </td>

                    {/* <td> <button
                      className="btn text-white"
                            style={{backgroundColor:"#1e40af"}}
                    >
                      Del
                    </button> </td> */}
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
    

export default GetSubscriptions


