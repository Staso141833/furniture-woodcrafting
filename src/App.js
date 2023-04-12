import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext.js";

import { Home } from "./components/Home/Home.js";
import { Login } from "./components/Login/Login.js";
import { Navigation } from "./components/Navigation/Navigation.js";
import { Register } from "./components/Register/Register.js";
import { Create } from "./components/Create/Create.js";
import { Footer } from "./components/Footer/Footer.js";
import { Kitchens } from "./components/Kitchens/Kitchens.js";
import { Woodcarvs } from "./components/Woodcarvs/Woodcarvs.js";
import { Bedrooms } from "./components/Bedrooms/Bedrooms.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import { Logout } from "./components/Logout/Logout.js";
import { Details } from "./components/Details/Details.js";
import { Edit } from "./components/Edit/Edit.js";
import { FurnitureProvider } from "./contexts/FurnitureContext.js";
import { RouteGuard } from "./components/common/RouteGuard.js";
import { FurnitureOwner } from "./components/common/FurnitureOwner.js";

function App() {


  return (
    <AuthProvider>
      <FurnitureProvider>
      <div id="box">
        <Navigation />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/login" element={<Login />} />;
            <Route path="/register" element={<Register />} />;
            <Route path="/add-furniture" element={<Create />}/>;
            <Route path="/catalog" element={<Catalog/>}/>;
            <Route path="/catalog/:furnitureId" element={<Details />} />
            <Route path="/kitchens" element={<Kitchens />} />;
            <Route path="/woodcarvs" element={<Woodcarvs />} />;
            <Route path="/bedrooms" element={<Bedrooms />} />;

            <Route element={<RouteGuard/>}>
              <Route path="/add-furniture" element={<Create />}/>;
              <Route path="/catalog/:furnitureId/edit" element={
                <FurnitureOwner>
                  <Edit />
                </FurnitureOwner>}/>
              <Route path="logout" element={<Logout />} />;
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
      </FurnitureProvider>
    </AuthProvider>
  );
}

export default App;
