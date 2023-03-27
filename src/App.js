
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js';
import { Navigation } from './components/Navigation/Navigation.js';
import { Register } from "./components/Register/Register.js";

function App() {
  return (

    <div id="box">
  <Navigation/>

  <main id="main-content">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>

    </main>
    </div>
  
 
  );
}

export default App;
