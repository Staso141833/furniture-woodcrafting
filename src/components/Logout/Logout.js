import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";



 export const Logout = () => {
   const { onLogout, token } = useContext(AuthContext);

   useEffect(() => {

    console.log(`${token}`)

     localStorage.removeItem(token);
    
     onLogout();
   
   }, [onLogout]);

   return <Navigate to="/" />;
 };



