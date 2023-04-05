
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js';
import { Navigation } from './components/Navigation/Navigation.js';
import { Register } from "./components/Register/Register.js";
import { Add } from "./components/Add/Add.js";
import { Footer } from "./components/Footer/Footer.js";
import { Newest } from "./components/Newest/Newest.js";
import { Edit } from "./components/Edit/Edit.js";
import { Kitchens } from "./components/Kitchens/Kitchens.js";
import { Woodcarvs } from "./components/Woodcarvs/Woodcarvs.js";
import { Details } from "./components/Details/Details.js";
import { Bedrooms } from "./components/Bedrooms/Bedrooms.js";

function App() {
  return (

    <div id="box">
  <Navigation/>

  <main id="main-content">
    <Routes>
      <Route path='/' element={<Home/>}/>;
      <Route path='/login' element={<Login/>}/>;
      <Route path='/register' element={<Register/>}/>;
      <Route path='/add' element={<Add/>}/>;
      <Route path='/newest' element={<Newest/>}/>;
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
