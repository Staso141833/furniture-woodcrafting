import { createContext } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from "../services/authService.js";
import { useLocaleStorage } from "../hooks/useLocalStorage.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useLocaleStorage("auth", {});
  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log("There is a problem!");
    }
  };

  const onRegisterSubmit = async (values) => {
    const { rePassword, ...registerData } = values;
    if (rePassword !== registerData.password) {
      throw Error("Passwords do not match!");
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      console.log("There is a problem!");
    }
  };

  const onLogout = async (successCallback) => {
    try {
      const token = auth.accessToken;

      await authService.logout(token);
      successCallback();
      setAuth({});
      navigate('/')
    } catch (error) {
      console.log("There is a problem!");
    }
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
