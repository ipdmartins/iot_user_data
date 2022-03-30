import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Headers from '../components/navbar';

import api from '../services/api';

// import { useParams, useNavigate } from 'react-router-dom';

export function Home() {
  // const navigate = useNavigate();

  return (
    <div>
      <Headers />
      <h1>Home</h1>
      <Button color='danger'>Danger</Button>
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


