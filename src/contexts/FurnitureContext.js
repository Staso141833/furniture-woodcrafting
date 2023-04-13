import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { furnitureServiceFactory } from "../services/furnitureService.js";

export const FurnitureContext = createContext();

export const FurnitureProvider = ({ 
  children,
 }) => {

  const navigate = useNavigate();
  const [furnitures, setFurnitures] = useState([]);
  const furnitureService = furnitureServiceFactory(); //auth.accessToken

  useEffect(() => {
    furnitureService.getAll().then((result) => {
      setFurnitures(result);
    });
  }, []);

  const onCreateFurnitureSubmit = async (data) => {
    const newFurniture = await furnitureService.create(data);

    setFurnitures((state) => [...state, newFurniture]);
    navigate("/catalog");
  };

  const onFurnitureEditSubmit = async (values) => {
    const result = await furnitureService.edit(values._id, values);

    setFurnitures((state) =>
      state.map((oldFurniture) =>
        oldFurniture._id === values._id ? result : oldFurniture
      )
    );
    navigate(`/catalog/${values._id}`);
  };

  const getFurniture = (furnitureId) => {
    return furnitures.find((furniture) => furniture._id === furnitureId);
  };

  const deleteFurniture = (furnitureId) => {
    const asking = window.confirm(`Are you sure you would like to delete this furniture?`);

    if (asking){
      setFurnitures((state) => state.filter((furniture) => furniture._id !== furnitureId));
    }

  
  };

  const contextValues = {
    furnitures,
    onCreateFurnitureSubmit,
    onFurnitureEditSubmit,
    deleteFurniture,
    getFurniture,
  };

  return (
    <FurnitureContext.Provider value={contextValues}>
      {children}
    </FurnitureContext.Provider>
  );
};

export const useFurnitureContext = () => {
  const context = useContext(FurnitureContext);

  return context;
};
