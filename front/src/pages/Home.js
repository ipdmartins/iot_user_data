import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Table,
} from 'reactstrap';
import Footer from '../components/footer';
import Headers from '../components/navbar';
// import { useParams, useNavigate } from 'react-router-dom';

export function Home() {
  // const navigate = useNavigate();  

  return (
    <div>
      <Headers />
      <Card>
        <CardBody className="text-justify">
          <CardTitle tag="h5">
            I - Présentation général du projet
          </CardTitle>
          <CardText>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="text-justify">
          <CardTitle tag="h5">
            II - Présentation de l'équipe projet
          </CardTitle>
          <Table>
            <thead>
              <tr>
                <th>
                  Nom et prénom
                </th>
                <th>
                  Étude
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Basile TALMON LARODERIE
                </td>
                <td>
                  Éleve-ingénieur à l'ESIGELEC em double diplôme à l'UQAC en maîtrise
                  informatique professionel
                </td>
              </tr>
              <tr>
                <td>
                  Igor MARTINS
                </td>
                <td>
                  Étudiant en maîtrise informatique volet recherche
                </td>
              </tr>
              <tr>
                <td>
                  Mamadou DIALLO
                </td>
                <td>
                  Étudiant en maîtrise informatique volet professionel
                </td>
              </tr>
              <tr>
                <td>
                  Vincent DOLLO
                </td>
                <td>
                  Éleve-ingénieur à l'ESIR em double diplôme à l'UQAC en maîtrise
                  informatique professionel
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Footer />
    </div>
    // <div>
    //   <Headers />
    //   <h1>Home
    //     <button onClick={()=> navigate('/')}>Change page</button>
    //   </h1>
    //   <Button color='danger'>Danger</Button>
    // </div>
  )
}


