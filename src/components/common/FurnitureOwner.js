import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useFurnitureContext } from "../../contexts/FurnitureContext.js";

export const FurnitureOwner = ({
    children,
}) => {
    const { furnitureId } = useParams();
    const { getFurniture } = useFurnitureContext();
    const { userId } = useAuthContext();

    const currentFurniture = getFurniture(furnitureId);

    if (currentFurniture && currentFurniture._ownerId !== userId) {
        return <Navigate to={`/catalog/${furnitureId}`} replace />
    }

    return children ? children : <Outlet />
};