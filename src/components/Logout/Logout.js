import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";

export const Logout = () => {

    const { onLogout } = useContext(AuthContext);

    useEffect(() => {
        localStorage.clear();
         onLogout()
       
    }, [onLogout])

    return  <Navigate to="/" />
}