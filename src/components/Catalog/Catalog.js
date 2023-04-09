import "./catalog.css";

import { useFurnitureContext } from "../../contexts/FurnitureContext.js";

import { CatalogItem } from "./CatalogItem/CatalogItem.js";

export const Catalog = () => {

  const { furnitures } = useFurnitureContext();

  return (
    <section id="furnitures">
      <h2>Furnitures</h2>

      <div className="furnitures-class">
        {furnitures.map((furniture) => (<CatalogItem key={furniture._id} {...furniture} />))};
        {furnitures.length === 0 && (
          <h3 className="no-furnitures">No furnitures yet</h3>
        )}
      </div>
    </section>
  );
};
