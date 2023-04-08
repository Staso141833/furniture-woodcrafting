import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { furnitureServiceFactory} from "./services/furnitureService";
import {authServiceFactory} from "./services/authService.js";
import { AuthContext } from "./contexts/AuthContext.js";
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
  const [auth, setAuth] = useState({});
  const furnitureService = furnitureServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);


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

  const onLoginSubmit = async (data) => {

    try {
      const result = await authService.login(data);
      setAuth(result);
      
      navigate('/catalog');
    } catch(error){
      console.log('There is a problem!');
    }

  };

  const onRegisterSubmit = async (values) => {

    const { rePassword, ...registerData } = values;
      if (rePassword !== registerData.password) {
        throw Error('Passwords do not match!');
      }

    try {
      const result = await authService.register(registerData);

      setAuth(result);
      navigate('/catalog');

    } catch(error){
        console.log('There is a problem!')
    }
  }

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  }

  const onFurnitureEditSubmit = async (values) => {
    const result = await furnitureService.edit(values._id, values);

      setFurnitures(state => state.map(oldFurniture => oldFurniture._id === values._id ? result : oldFurniture));
    navigate(`/catalog/${values._id}`);
  }

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    
  }

  return (
    <AuthContext.Provider value={contextValues}>
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
      {/* <Route path='/catalog/:furnitureId' element={<Details/>}/> */}
      <Route path='/catalog/:furnitureId' element={<Edit onFurnitureEditSubmit={onFurnitureEditSubmit}/>}/>
      {/* <Route path='/catalog/:furnitureId/edit' element={<Edit/>}/> */}
      <Route path='/kitchens' element={<Kitchens/>}/>;
      <Route path='/woodcarvs' element={<Woodcarvs/>}/>;
      <Route path='/bedrooms' element={<Bedrooms/>}/>;
      
    </Routes>

    </main>
    <Footer/> 
    </div>
      
    </AuthContext.Provider>

   
  );
}

export default App;
