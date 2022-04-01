import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Button,
  Row,
  Col,
  Badge
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card>
        <CardBody className="text-center bg-info text-dark">
          <CardTitle tag="h3">
            Outils de visualisation de la collecte et du traitement des données
          </CardTitle>
          <CardSubtitle className="mb-2" tag="h6">
            Par Basile TALMON LARODERIE, Igor MARTINS, Mamadou DIALLO, Vincent DOLLO
          </CardSubtitle>
          <CardSubtitle tag="h6">
            Dans le cadre du cours 8INF912: Sécurité IoT
          </CardSubtitle>
        </CardBody>
      </Card>
      <Row className="bg-light pt-2 pb-2 ">
        <Col sm={3}>
          <NavLink to="/">Présentation du projet</NavLink>
        </Col>
        <Col sm={3}>
          <NavLink to="/categoryobject">Trouver un objet par catégorie</NavLink>
        </Col>
        <Col >
          <Row>
            <Col>
              <Input placeholder="Rechercher un objet par son nome" />
            </Col>
            <Col>
              <Button type="submit" color="primary"><span className='bi bi-search'></span> Search</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Navbar color="secondary" light expand="md">
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/">Présentation du projet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/categoryobject">Trouver un objet par catégorie</NavLink>
            </NavItem>
            <NavItem className="float-right">
              <Input placeholder="Rechercher un objet par son nome" />
            </NavItem>
            <Button type="submit" color="primary"><span className='bi bi-search'></span> Search</Button>
          </Nav>
        </Collapse>
      </Navbar> */}
    </div >

  );
}


export default Headers;