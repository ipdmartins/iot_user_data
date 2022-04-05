import React from 'react';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import logoHome from '../assets/images/home.png'
import logoMedical from '../assets/images/medical.png';
import logoTransport from '../assets/images/transport.png';

export function CategoryObject() {

  return (
    <div>
      <Navbar />
      <Card style={{ margin: '30px', backgroundColor: '#f2f2f2' }}>
        <CardBody className="text-justify" >
          <CardTitle tag="h4" style={{ textAlign: "center" }}>
            <center>Choississez la catégorie que vous souhaitez
            </center>
          </CardTitle>
          <Row>
            <Col xs="4">
              <Card body style={{ backgroundColor: '#d1e2ff', margin: '20px' }} >
                <center>
                  <CardTitle style={{ fontWeight: "bold", fontSize: "30px" }}><center>Domotique</center></CardTitle>
                  <img src={logoHome} width="100" height="100" />
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </center>
              </Card>
            </Col>
            <Col xs="4">
              <Card body style={{ backgroundColor: '#d1e2ff', margin: '20px' }}>
                <center>
                  <CardTitle style={{ fontWeight: "bold", fontSize: "30px" }}><center>Medical</center></CardTitle>
                  <img src={logoMedical} width="100" height="100" />
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </center>
              </Card>
            </Col>
            <Col xs="4">
              <Card body style={{ backgroundColor: '#d1e2ff', margin: '20px' }}>
                <center>
                  <CardTitle style={{ fontWeight: "bold", fontSize: "30px" }}><center>Transport</center></CardTitle>
                  <img src={logoTransport} width="100" height="100" />
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </center>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Footbar />
    </div>
  )
}


