import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Notification from '../Notification';

const Headers = () => {
  const navigate = useNavigate();
  const [objectName, setObjectName] = useState("");

  async function getObjectsByName() {
    try {
      const response = await api.get(`/object?name=${objectName}`);

      if (response.data.length < 1) {
        Notification({
          title: 'Aucun objet trouvé',
          type: 'error'
        })
      } else {
        navigate(`/subcategoryobjectlist/${objectName}`);
      }
    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
    }
  }

  return (
    <div>
      <Card>
        <CardBody className="text-center text-dark" style={{ backgroundColor: '#95bafc' }}>
          <CardTitle tag="h6">
            Outils de visualisation de la collecte et du traitement des données, dans le cadre du cours 8INF912: Sécurité IoT
          </CardTitle>
          <CardSubtitle>
            Par Basile TALMON LARODERIE, Igor MARTINS, Mamadou DIALLO, Vincent DOLLO
          </CardSubtitle>
        </CardBody>
      </Card>
      <Row className="pt-2 pb-1" style={{ backgroundColor: '#d1e2ff' }}>
        <Col sm={3}>
          <NavLink to="/"><center>Présentation du projet</center></NavLink>
        </Col>
        <Col sm={3}>
          <NavLink to="/categoryobject"><center>Mon environnement IoT</center></NavLink>
        </Col>
        <Col >
          <Row>
            <Col>
              <Input
                placeholder="Rechercher un objet par son nom"
                value={objectName}
                onChange={(e) => { setObjectName(e.target.value) }}
              />
            </Col>
            <Col>
              <Button
                type="submit"
                color="primary"
                onClick={async () => {
                  getObjectsByName();
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div >
  );
}

export default Headers;