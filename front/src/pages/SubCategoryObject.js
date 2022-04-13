import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import api from '../services/api';
import logoEnceinte from '../assets/images/enceinte.png'
// import logoTV from '../assets/images/tv.png';
// import logoLampe from '../assets/images/lampe.png';
// import logoCamera from '../assets/images/camera.png'
// import logoThermostat from '../assets/images/thermostat.png';
// import logoAlarme from '../assets/images/alarme.png';
// import Notification from '../components/Notification';

export function SubCategoryObject() {
  const { id } = useParams();
  const [subCategories, setSubCategories] = useState([]);

  async function getSubCategories() {
    try {
      const response = await api.get(`/subcategory/${id}`);

      setSubCategories(response.data)

    } catch (error) {
      // Notification({
      //   title: error.response.data.message || error.message,
      //   type: 'error',
      // });
    }
  }

  useEffect(() => {
    async function fetchData() {
      getSubCategories();
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Card style={{ margin: '30px', backgroundColor: '#f2f2f2' }}>
        <CardBody className="text-justify" >
          <CardTitle tag="h4" style={{ textAlign: "center" }}>
            <center>Voici la catégorie que vous avez choisie : <strong>Ajouter la catégorie et image</strong>
            </center>
          </CardTitle>
          <Row>
            {subCategories.map(subCategoriesList => {
              return (
                <div>
                  <Col xs="4" key={subCategoriesList.id}>
                    <Card body style={{ borderWidth: '3px', backgroundColor: '#d1e2ff', margin: '20px', marginLeft: '50px', marginRight: '50px', paddingBottom: '50px' }} >
                      <center>
                        <CardTitle style={{ fontWeight: "bold", fontSize: "30px" }}><center>{subCategoriesList.name}</center></CardTitle>
                        <br />
                        <img alt='subcategory' src={logoEnceinte} width="100" height="100" />
                      </center>
                    </Card>
                  </Col>
                </div>
              )
            })}
          </Row>
        </CardBody>
      </Card>
      <Footbar />
    </div>
  )
}


