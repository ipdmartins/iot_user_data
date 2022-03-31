import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Button
} from 'reactstrap';

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
      <Navbar color="secondary" className="text-dark" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Présentation du projet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Trouver un objet par catégorie</NavLink>
            </NavItem>
            <NavItem className="float-right">
              <Input placeholder="Rechercher un objet par son nome" />
            </NavItem>
            <Button type="submit" color="primary"><span className='bi bi-search'></span> Search</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div >

  );
}


export default Headers;