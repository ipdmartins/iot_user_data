import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import logoHome from '../assets/images/home.png'
// import logoMedical from '../assets/images/medical.png';
// import logoTransport from '../assets/images/transport.png';
import api from '../services/api';
import { NavLink } from 'react-router-dom';

export function CategoryObject() {
  const [categories, setCategories] = useState([{
    name: ''
  }]);

  async function getCategories() {
    try {
      const response = await api.get(`/category`);

      setCategories(response.data);
    } catch (error) {
      // Notification({
      //   title: error.response.data.message || error.message,
      //   type: 'error',
      // });
    }
  }

  useEffect(() => {
    async function fetchData() {
      getCategories();
    }
    fetchData();
  }, []);

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
            {categories.map(categoriesList => {
              return (
                <div>
                  <Col xs="4" key={categoriesList.id}>
                    <Card body style={{ backgroundColor: '#d1e2ff', margin: '20px' }} >
                      <center>
                        <CardTitle style={{ fontWeight: "bold", fontSize: "30px" }}>
                          <NavLink to={`/subcategoryobject/${categoriesList.id}`}>
                            <center>{categoriesList.name}</center>
                          </NavLink>
                        </CardTitle>
                        <img alt='logo' src={logoHome} width="100" height="100" />
                        <CardText>{categoriesList.description}</CardText>
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


