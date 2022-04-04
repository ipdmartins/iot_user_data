import React from 'react';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import logoHome from '../assets/images/home.png'    
import logoMedical from '../assets/images/medical.png';    
import logoTransport from '../assets/images/transport.png';    


export function CategoryObject(){

    return (
        <div>
            <Navbar/>

            <Card style={{marginRight:'30px', marginLeft:'30px', marginTop:'20px', backgroundColor:'#f2f2f2'}}>
                <CardBody className="text-justify" > 
                    
                    <CardTitle tag="h4" style={{textAlign:"center"}}>
                        <center><strong>Choississez la catégorie que vous souhaitez</strong>
                        </center>
                        <br/>
                    </CardTitle>

                    <Row>
                        <Col xs="4">
                                <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px'}} >
                                    <center>
                                        <br/><br/>                                       
                                        <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Domotique</center></CardTitle>
                                        <br/>
                                        <img src={logoHome} width="125" height="125"/>
                                        <br/><br/>
                                        <CardText>Contient tous les objets connectés que l'on peut retrouver dans une maison</CardText>
                                        <br/><br/>

                                    </center>
                                </Card>
                        </Col>
                        <Col xs="4">
                        <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px'}}>
                                <center>
                                     <br/><br/>                                       
                                    <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Médical</center></CardTitle>
                                    <br/>
                                    <img src={logoMedical} width="125" height="125"/>
                                    <br/><br/>
                                    <CardText>Contient tous les objets connectés qui servent dans le domaine du médical</CardText>
                                    <br/><br/>
                                </center>
                        
                            </Card>
                        </Col>
                        <Col xs="4">
                        <Card body style={{borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px'}}>
                                <center>
                                    <br/><br/>
                                    <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Transport</center></CardTitle>
                                    <br/>
                                    <img src={logoTransport} width="125" height="125"/>
                                    <br/><br/>
                                    <CardText>Contient tous les objets connectés que l'on peut retrouver pour le transport</CardText>
                                    <br/><br/>
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


