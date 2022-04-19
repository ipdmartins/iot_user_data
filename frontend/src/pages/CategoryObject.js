import React, { useState, useEffect } from 'react';
import { Card, Row, Col, CardBody, Label, CardGroup, UncontrolledTooltip, Button, Modal, ModalHeader, ModalBody, ModalFooter, CardSubtitle, CardText } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

// import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import api from '../services/api';
import Navbar from '../components/navbar/index';
import Footbar from '../components/footer/index';
import logoEnceinte from '../assets/images/enceinte.png'
import Notification from '../components/Notification';
import Globals from '../components/Global';

// import logoHome from '../assets/images/home.png'
// import logoMedical from '../assets/images/medical.png';
// import logoTransport from '../assets/images/transport.png';

export function CategoryObject() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [objects, setObjects] = useState([]);
  const [modalObject, setModalObject] = useState([]);
  const [board, setBoard] = useState([]);
  const [modalOpenDetail, setModalOpenDetail] = useState(false);
  console.log(Globals.environmentObjects);

  async function getCategories() {
    try {
      const response = await api.get(`/category`);

      if (response.data) {
        const list = response.data.map(element => {
          return {
            label: element.name,
            value: element.id,
          }
        });
        setCategories(list);
      }
    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
    }
  }

  async function getSubCategories(idCategory) {
    try {
      const response = await api.get(`/subcategory/${idCategory}`);

      if (response.data) {
        const list = response.data.map(element => {
          return {
            label: element.name,
            value: element.id,
          }
        });
        setSubCategories(list);
      }
    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
    }
  }

  async function getObjects(idSubCategory) {
    try {
      const response = await api.get(`/object?idSubCategory=${idSubCategory}`);

      let listObjects = [];
      let listBoard = [];
      response.data.forEach(element => {
        const found = Globals.environmentObjects.find(item => item.id === element.id);

        if (!found) {
          listObjects.push(element);
        }
        else {
          listBoard.push(element);
        }
      });

      setObjects(listObjects);
      setBoard(listBoard);

    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
    }
  }

  async function getObjectDetail(id) {
    try {
      const response = await api.get(`/object/${id}`);

      const found = Globals.environmentObjects.find(item => item.id === response.data[0].id);

      if (!found) {
        Globals.environmentObjects.push(response.data[0]);
      }

    } catch (error) {
      Notification({
        title: error.response.data.message || error.message,
        type: 'error'
      })
    }
  }

  async function moveToBoard(object, index) {
    setBoard([...board, object]);

    const objectList = [...objects];
    objectList.splice(index, 1);
    setObjects(objectList);
  }

  async function moveToObjects(object, index) {
    const foundIndex = Globals.environmentObjects.findIndex(item => item.id === object.id);
    console.log(object);
    Globals.environmentObjects.splice(foundIndex, 1);

    setObjects([...objects, object]);

    const boardList = [...board];
    boardList.splice(index, 1);
    setBoard(boardList);
  }

  function toggleModalDetail() {
    setModalOpenDetail(!modalOpenDetail);
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
      <h5 className="mt-3" style={{ marginLeft: '2%' }}>Mon environnement IoT</h5>
      <Card className="mt-0" style={{ margi: '1%', marginBottom: '5%', backgroundColor: '#f2f2f2' }}>
        <CardBody className="text-justify" >
          <Row>
            <Col sm={4} >
              <Label>Choississez la catégorie que vous souhaitez</Label>
              <Select
                placeholder="Sélectionnez l'option"
                className="basic-single"
                classNamePrefix="select"
                name="idcategory"
                options={categories}
                // value={professionalSelected}
                onChange={professional => {
                  getSubCategories(professional.value)
                }}
              />
            </Col>
            {subCategories.length > 0 &&
              <Col sm={6} >
                <Label>Choississez la sous-catégorie que vous souhaitez</Label>
                <Select
                  placeholder="Sélectionnez l'option"
                  className="basic-single"
                  classNamePrefix="select"
                  name="idSubCategory"
                  options={subCategories}
                  // value={professionalSelected}
                  onChange={subCategory => {
                    getObjects(subCategory.value)
                  }}
                />
              </Col>
            }
          </Row>
          <Row >
            <Col sm={2} style={{ height: '100%', width: '10%', marginBottom: '50px' }}>
              {objects.map((objectsList, index) => {
                return (
                  <div>
                    <Card
                      className='mt-2'
                      id={`object_${index}`}
                      style={{ borderWidth: '3px', backgroundColor: '#d1e2ff', cursor: 'pointer' }}
                      onClick={async () => {
                        await getObjectDetail(objectsList.id);
                        moveToBoard(objectsList, index);
                      }}
                    >
                      <center>
                        <center> <p style={{ fontWeight: "bold", margin: "0" }}>{objectsList.name || objectsList.objectname}</p></center>
                        <img alt='objectDesc' src={objectsList.image} width="100%" height="100%" />
                      </center>
                    </Card>
                    <UncontrolledTooltip placement="right" target={`object_${index}`}>
                      Cliquez pour passer à mon environnement
                    </UncontrolledTooltip>
                  </div>
                )
              })}
            </Col>
            {(Globals.environmentObjects.length > 0 || objects.length > 0) &&
              <Col sm={10}>
                <CardGroup className='mt-2' style={{ borderWidth: '2px', backgroundColor: '#cfd7e6', height: '100%', width: '90%' }} >
                  <Row>
                    {Globals.environmentObjects.map((boardList, index) => {
                      return (
                        <Col>
                          <Card
                            id={`board_${index}`}
                            className='mt-2'
                            style={{ borderWidth: '3px', backgroundColor: '#d1e2ff' }}
                            onClick={async () => {
                              moveToObjects(boardList, index);
                            }}
                          >
                            <center>
                              <center> <p style={{ fontWeight: "bold" }}>{boardList.name}</p></center>
                              <img alt='objectDesc' src={boardList.image} width="90" height="90" />
                            </center>
                          </Card>
                          <UncontrolledTooltip placement="right" target={`board_${index}`}>
                            Cliquez pour supprimer
                          </UncontrolledTooltip>
                          <Button
                            className='mt-2'
                            color="info"
                            onClick={async () => {
                              const obj = Globals.environmentObjects.find(item => item.id === boardList.id);
                              setModalObject(obj);
                              toggleModalDetail();
                            }}
                          >
                            Détaillage
                          </Button>
                        </Col>
                      )
                    })}
                  </Row>
                </CardGroup>
              </Col>
            }
          </Row>
        </CardBody>
      </Card>

      <Modal
        isOpen={modalOpenDetail}
        toggle={toggleModalDetail}
        backdrop="static"
        size="xs"
      >
        <ModalHeader toggle={toggleModalDetail}>
          Détails de l'objet
        </ModalHeader>
        <ModalBody>
          <Row>
            <Label>
              <span style={{ fontWeight: "bold" }}>Nom: </span>{modalObject.objectname}
            </Label>
          </Row>
          <Row>
            <Label>
              <span style={{ fontWeight: "bold" }}>Description: </span>{modalObject.description}
            </Label>
          </Row>
          <Row>
            <Label>
              <span style={{ fontWeight: "bold" }}>Vulnérabilités: </span>{modalObject.descvuln}
            </Label>
          </Row>
          <Row>
            <Label>
              <span style={{ fontWeight: "bold" }}>Attaques: </span>{modalObject.descattack}
            </Label>
          </Row>
          <Row>
            <Label>
              <span style={{ fontWeight: "bold" }}>Conseils: </span>{modalObject.descadvice}
            </Label>
          </Row>
        </ModalBody>
      </Modal>
      <Footbar />
    </div>
  )
}


