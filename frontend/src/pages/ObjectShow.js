import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Badge
} from 'reactstrap';
import logoEnceinte from '../assets/images/enceinte.png'
import Footer from '../components/footer/index';
import Navbar from '../components/navbar/index';
import api from '../services/api';
import Globals from '../components/Global';
import Notification from '../components/Notification';

export function ObjectShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [object, setObject] = useState([]);

  async function getObject() {
    try {
      const response = await api.get(`/object/${id}`);

      setObject(response.data[0]);
    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
    }
  }

  useEffect(() => {
    async function fetchData() {
      getObject();
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Card style={{ backgroundColor: '#f2f2f2', height: '80%' }}>
        <CardBody className="text-justify">
          <Badge style={{ color: 'black', cursor: 'pointer' }} onClick={() => navigate(-1)}>
            {`<< Retourner`}
          </Badge>
          <h5 style={{ textAlign: 'center' }}>
            Voici le détail de l'objet. Vous pouvez l'ajouter à votre environnement en cliquant sur le bouton "ajouter".
          </h5>
          <br/>
          <Row style={{ marginBottom: '200px' }}>
            <Col sm="3">
              <Card body style={{ backgroundColor: '#d1e2ff' }} >
                <h5 style={{ fontWeight: "bold" }}>{`Nom: ${object.objectname}`}</h5>
                <CardText>{`Description: ${object.description}`}</CardText>
                <center><h6>Image du produit</h6></center>
                <Card >
                  <center><img width='40%' height='50%' src={object.image} /></center>
                </Card>
                <Button
                  color="success"
                  className='mt-2'
                  onClick={async () => {
                    const resp = Globals.environmentObjects.find(item => item.id === object.id);
                    console.log(resp);
                    if (!resp) {
                      Globals.environmentObjects.push(object);
                      Notification({
                        title: 'Ajouté avec succès',
                        type: 'success'
                      })
                    } else {
                      Notification({
                        title: 'Produit déjà ajouté',
                        type: 'error'
                      })
                    }
                  }}
                >
                  Ajouter à mon environnement
                </Button>
              </Card>
            </Col>
            <Col sm="9" >
              <Card className='ml-2' border="light" style={{ backgroundColor: '#f2f2f2' }}>
                <CardText>
                  <span style={{ fontWeight: "bold" }}>1 - Vulnérabilités: </span>{object.descvuln}
                </CardText>
                <CardText>
                  <span style={{ fontWeight: "bold" }}>2 - Cyberattaques possibles: </span>{object.descattack}
                </CardText>
                <CardText>
                  <span style={{ fontWeight: "bold" }}>3 - Conseils: </span>{object.descadvice}
                </CardText>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Footer />
    </div>
  )
}


