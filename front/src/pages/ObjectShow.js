import React from 'react';
import Footer from '../components/footer/index';
import Navbar  from '../components/navbar/index';
import { Card, CardBody, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
// import { useParams, useNavigate } from 'react-router-dom';

export function ObjectShow(){
    // const navigate = useNavigate();

    return (
        <div>
            <Navbar/>
            <Card style={{margin:'30px', backgroundColor:'#f2f2f2'}}>
                <CardBody className="text-justify">
                    <CardTitle tag="h3" style={{textAlign:'center'}}>
                        Voici la liste des objets de la catégorie :  <strong>Ajouter le chemin</strong>
                    </CardTitle>
                    <br/>
                    <Row>
                        <Col xs="4">
                                <Card body style={{ backgroundColor: '#d1e2ff', margin: '20px', height:'95%'}} >
                                    <center>
                                    <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}><center>Fiche produit</center></CardTitle>
                                    <CardText>Ici il y aura une description détaillée du produit, de ces caratéristiques etc...</CardText>
                                        <Card style={{width:"300px", height:"200px",  justifyContent:'center', alignContent:'center'}}>
                                            <CardTitle>IMAGE DU PRODUIT</CardTitle>
                                        </Card>
                                        <CardText style={{fontWeight: "bold"}}>Nom du produit</CardText>                   
                                    </center>
                                </Card>
                        </Col>
                        <Col xs="8">
                            <Card body border="light" style={{ backgroundColor: '#f2f2f2', margin: '20px'}}>
                                    <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}>1 - Cyberattaques possibles</CardTitle>
                                    <ListGroup>
                                        <ListGroupItem>Attaque 1</ListGroupItem>
                                        <ListGroupItem>Attaques 2</ListGroupItem>
                                        <ListGroupItem>Attaques 3</ListGroupItem>
                                        <ListGroupItem>Attaques 4</ListGroupItem>
                                        <ListGroupItem>Attaques 5</ListGroupItem>
                                    </ListGroup>
                                    <br/>
                                    <CardTitle style={{fontWeight: "bold", fontSize: "30px"}}>2 - Menaces probables</CardTitle>
                                    <ListGroup>
                                        <ListGroupItem>Menace 1</ListGroupItem>
                                        <ListGroupItem>Menaces 2</ListGroupItem>
                                        <ListGroupItem>Menaces 3</ListGroupItem>
                                        <ListGroupItem>Menaces 4</ListGroupItem>
                                        <ListGroupItem>Menaces 5</ListGroupItem>
                                    </ListGroup>
                            </Card>
                        </Col>
                    
                    </Row>

                </CardBody>
            </Card>

            <Footer/>


        </div>
    ) 
}


