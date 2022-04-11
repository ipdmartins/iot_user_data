import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function SubCategoryObject({ history }){
  const { IoT } = useSelector(state => state.auth);
  const { id } = user;
  const params = useParams();

    // const navigate = useNavigate();

    return (
        <h1>This page show object subcategories
            {/* <button onClick={()=> navigate('/')}>Change page</button> */}
        </h1>
    ) 
}


