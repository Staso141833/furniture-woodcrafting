import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { furnitureServiceFactory} from "./services/furnitureService";

import { AuthProvider } from "./contexts/AuthContext.js";
import { useService } from "./hooks/userService.js";


import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js';
import { Navigation } from './components/Navigation/Navigation.js';
import { Register } from "./components/Register/Register.js";
import { Add } from "./components/Add/Add.js";
import { Footer } from "./components/Footer/Footer.js";
import { Kitchens } from "./components/Kitchens/Kitchens.js";
import { Woodcarvs } from "./components/Woodcarvs/Woodcarvs.js";
import { Bedrooms } from "./components/Bedrooms/Bedrooms.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import { Logout } from "./components/Logout/Logout.js";
import { Details } from "./components/Details/Details.js";
import { Edit } from "./components/Edit/Edit.js";





function App() {

  const navigate = useNavigate();
  const [furnitures, setFurnitures] = useState([]);
  const furnitureService = furnitureServiceFactory(); //auth.accessToken

  useEffect(() => {
    furnitureService.getAll()
      .then(result => {
  
        setFurnitures(result)
      });
  
  }, []);

  const onCreateFurnitureSubmit = async (data) => {

  const newFurniture = await furnitureService.create(data);

    setFurnitures(state => [...state, newFurniture])
  navigate('/catalog');

  }





 

  const onFurnitureEditSubmit = async (values) => {
    const result = await furnitureService.edit(values._id, values);

      setFurnitures(state => state.map(oldFurniture => oldFurniture._id === values._id ? result : oldFurniture));
    navigate(`/catalog/${values._id}`);
  }


  return (
    <AuthProvider>
    <div id="box">
  <Navigation/>

  <main id="main-content">
    <Routes>
      <Route path='/' element={<Home/>}/>;
      <Route path='/login' element={<Login/> }/>;
      <Route path='logout' element={<Logout/>}/>;
      <Route path='/register' element={<Register/>}/>;
      <Route path='/add-furniture' element={<Add onCreateFurnitureSubmit={onCreateFurnitureSubmit}/>}/>;
      <Route path='/catalog' element={<Catalog furnitures={furnitures}/>}/>;
      <Route path='/catalog/:furnitureId' element={<Details/>}/> 
      <Route path='/catalog/:furnitureId/edit' element={<Edit onFurnitureEditSubmit={onFurnitureEditSubmit}/>}/>
      <Route path='/kitchens' element={<Kitchens/>}/>;
      <Route path='/woodcarvs' element={<Woodcarvs/>}/>;
      <Route path='/bedrooms' element={<Bedrooms/>}/>;
      
    </Routes>

    </main>
    <Footer/> 
    </div>
      
    </AuthProvider>

   
  );
}

export default App;
