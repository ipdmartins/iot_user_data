import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import api from '../services/api';
// import logoEnceinte from '../assets/images/enceinte.png'
import Notification from '../components/Notification';

export function SubCategoryObject() {
  const { id } = useParams();
  const [subCategories, setSubCategories] = useState([]);

  async function getSubCategories() {
    try {
      const response = await api.get(`/subcategory/${id}`);

      setSubCategories(response.data)

    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
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
      <Card style={{ margin: '1%', backgroundColor: '#f2f2f2' }}>
        <CardBody className="text-justify" >
          <CardTitle className='mb-3' tag="h4" style={{ textAlign: "center" }}>
            <center>Voici la catégorie que vous avez choisie : <strong>Ajouter la catégorie et image</strong>
            </center>
          </CardTitle>
          <Row>
            {subCategories.map(subCategoriesList => {
              return (
                <Col sm={2} >
                  <Card className='m-0 p-0' style={{ borderWidth: '3px', backgroundColor: '#d1e2ff' }} >
                    <center>
                      <p style={{ fontWeight: "bold" }}><center>{subCategoriesList.name}</center></p>
                      {/* <img alt='subcategory' src={logoEnceinte} width="90" height="90" /> */}
                    </center>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </CardBody>
      </Card>
      <Footbar />
    </div>
  )
}


