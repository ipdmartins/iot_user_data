import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  CardGroup
} from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import logoEnceinte from '../assets/images/enceinte.png'
import Notification from '../components/Notification';

export function SubCategoryObjectList() {
  const { objectName } = useParams();
  const [objects, setObjects] = useState([]);
  const navigate = useNavigate();

  async function getObjectsByName() {
    try {
      const response = await api.get(`/object?name=${objectName}`);

      setObjects(response.data);

    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
    }
  }

  useEffect(() => {
    async function fetchData() {
      getObjectsByName();
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <CardGroup style={{ borderWidth: '2px', margin: '3%' }} >
        <div>
          <h3>Liste d'objets liés à la recherche</h3>
          <Row>
            {objects.map((objectsList, index) => {
              return (
                <Col sm={2} style={{ height: '100%', width: '10%' }}>
                  <Card
                    className='mt-2'
                    id={`object_${index}`}
                    style={{ borderWidth: '3px', backgroundColor: '#d1e2ff', cursor: 'pointer' }}
                    onClick={async () => {
                      navigate(`/objectshow/${objectsList.id}`);
                    }}
                  >
                    <center>
                      <center> <p style={{ fontWeight: "bold", margin: "0" }}>{objectsList.name}</p></center>
                      <img alt='objectDesc' src={logoEnceinte} width="25%" height="25%" />
                    </center>
                  </Card>
                  <UncontrolledTooltip placement="right" target={`object_${index}`}>
                    Cliquez pour voir la description complète
                  </UncontrolledTooltip>
                </Col>
              )
            })}
          </Row>
        </div>
      </CardGroup>
      <Footbar />
    </div>
  )
}


