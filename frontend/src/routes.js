import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CategoryObject } from './pages/CategoryObject'
import { Home } from './pages/Home'
import { ObjectShow } from './pages/ObjectShow'
import { SubCategoryObject } from './pages/SubCategoryObject'
import { SubCategoryObjectList } from './pages/SubCategoryObjectList'

//https://reactrouter.com/docs/en/v6/getting-started/tutorial

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/subcategoryobjectlist/:objectName' element={<SubCategoryObjectList />}/>
      <Route path='/objectshow/:id' element={<ObjectShow />} />

      <Route path='/categoryobject' element={<CategoryObject />} />
      <Route path='/subcategoryobject/:id' element={<SubCategoryObject />} />
    </Routes>
  )
}
