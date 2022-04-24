import React from 'react';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import logoEnceinte from '../assets/images/enceinte.png'    
import logoTV from '../assets/images/tv.png';    
import logoLampe from '../assets/images/lampe.png'; 
import logoCamera from '../assets/images/camera.png'    
import logoThermostat from '../assets/images/thermostat.png';    
import logoAlarme from '../assets/images/alarme.png';  
// import { useParams, useNavigate } from 'react-router-dom';

export function SubCategoryObject(){
    // const navigate = useNavigate();

    return (
        <div>
            <Navbar/>

            <Card style={{margin:'30px', backgroundColor:'#f2f2f2'}}>
                <CardBody className="text-justify" > 
                    
                    <CardTitle tag="h4" style={{textAlign:"center"}}>
                        <center>Voici la catégorie que vous avez choisie : <strong>Ajouter la catégorie et image</strong>
                        </center>
                    </CardTitle>

                    <Row>
                        <Col xs="4">
                                <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px',marginLeft:'50px',marginRight:'50px', paddingBottom:'50px'}} >
                                    <center>
                                        <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Enceintes</center></CardTitle>
                                        <br/>
                                        <img src={logoEnceinte} width="100" height="100"/>
                                    </center>
                                </Card>
                        </Col>
                        <Col xs="4">
                                <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px',marginLeft:'50px',marginRight:'50px', paddingBottom:'50px'}} >
                                    <center>
                                        <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>TVs</center></CardTitle>
                                        <br/>
                                        <img src={logoTV} width="100" height="100"/>
                                    </center>
                                </Card>
                        </Col>
                        <Col xs="4">
                                <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px',marginLeft:'50px',marginRight:'50px', paddingBottom:'50px'}} >
                                    <center>
                                        <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Lampes</center></CardTitle>
                                        <br/>
                                        <img src={logoLampe} width="100" height="100"/>
                                    </center>
                                </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4">
                                <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px',marginLeft:'50px',marginRight:'50px', paddingBottom:'50px'}} >
                                    <center>
                                        <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Thermostats</center></CardTitle>
                                        <br/>
                                        <img src={logoThermostat} width="100" height="100"/>
                                    </center>
                                </Card>
                        </Col>
                        <Col xs="4">
                                <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px',marginLeft:'50px',marginRight:'50px', paddingBottom:'50px'}} >
                                    <center>
                                        <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Caméras</center></CardTitle>
                                        <br/>
                                        <img src={logoCamera} width="100" height="100"/>
                                    </center>
                                </Card>
                        </Col>
                        <Col xs="4">
                                <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px',marginLeft:'50px',marginRight:'50px', paddingBottom:'50px'}} >
                                    <center>
                                        <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Alarmes</center></CardTitle>
                                        <br/>
                                        <img src={logoAlarme} width="100" height="100"/>
                                    </center>
                                </Card>
                        </Col>
                    </Row>
                    
                    
                </CardBody>
            </Card>



            <Footbar/>

        </div>
        
    ) 
}


