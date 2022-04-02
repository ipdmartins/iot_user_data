import React from 'react';
import Footer from '../components/footer';
import Headers from '../components/navbar';
// import { useParams, useNavigate } from 'react-router-dom';

export function CategoryObject() {
  // const navigate = useNavigate();

  return (
    <>
      <Headers />
      <h1>This page list categories
        {/* <button onClick={()=> navigate('/')}>Change page</button> */}
      </h1>
      <Footer />
    </>
  )
}


