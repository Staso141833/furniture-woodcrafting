import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as furnitureService from "./services/furnitureService.js";

import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js';
import { Navigation } from './components/Navigation/Navigation.js';
import { Register } from "./components/Register/Register.js";
import { Add } from "./components/Add/Add.js";
import { Footer } from "./components/Footer/Footer.js";
import { Edit } from "./components/Edit/Edit.js";
import { Kitchens } from "./components/Kitchens/Kitchens.js";
import { Woodcarvs } from "./components/Woodcarvs/Woodcarvs.js";
import { Details } from "./components/Details/Details.js";
import { Bedrooms } from "./components/Bedrooms/Bedrooms.js";
import { Catalog } from "./components/Catalog/Catalog.js";




function App() {

  const navigate = useNavigate();
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    furnitureService.getAll()
      .then(result => {
        console.log(result)
        setFurnitures(result)
      });
  
  }, []);

  const onCreateFurnitureSubmit = async (data) => {
      console.log(data);
  const newFurniture = await furnitureService.create(data);

    setFurnitures(state => [...state, newFurniture])
  navigate('/catalog');

  }

  return (

    <div id="box">
  <Navigation/>

  <main id="main-content">
    <Routes>
      <Route path='/' element={<Home/>}/>;
      <Route path='/login' element={<Login/>}/>;
      <Route path='/register' element={<Register/>}/>;
      <Route path='/add-furniture' element={<Add onCreateFurnitureSubmit={onCreateFurnitureSubmit}/>}/>;
      <Route path='/catalog' element={<Catalog furnitures={furnitures}/>}/>;
      <Route path='catalog/:furnitureId' element={<Details/>}/>
      <Route path='/edit' element={<Edit/>}/>; 
      <Route path='/kitchens' element={<Kitchens/>}/>;
      <Route path='/woodcarvs' element={<Woodcarvs/>}/>;
      <Route path='/details' element={<Details/>}/>;
      <Route path='/bedrooms' element={<Bedrooms/>}/>;
    </Routes>

    </main>
    <Footer/> 
    </div>
   
  );
}

export default App;
