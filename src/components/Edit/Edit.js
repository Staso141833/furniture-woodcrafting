import "./edit.css";

import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";
import { useParams } from "react-router-dom";

import { useService } from "../../hooks/userService.js";
import { furnitureServiceFactory } from "../../services/furnitureService.js";
import { useFurnitureContext } from "../../contexts/FurnitureContext.js";

export const Edit = () => {
  const { onFurnitureEditSubmit } = useFurnitureContext();
  const { furnitureId } = useParams();
  const furnitureService = useService(furnitureServiceFactory);
  const { values, changeHandler, onSubmit, changeValues } = useForm({
    _id: '',
    kind: '',
    wood: '',
    width: '',
    price: '',
    imageUrl: '',
  }, onFurnitureEditSubmit);

  useEffect(() => {
    furnitureService.getOne(furnitureId)
      .then(result => {
        changeValues(result);
      });
  }, [furnitureId]);

    return (
    <section id="edit">
        <div className="edit-form-conainter">
        
      
          <form className="form-edit" method="POST" onSubmit={onSubmit}>
      
             <div className="edit-furniture">
              <h2>Edit furniture</h2>
             </div>
        
             
            <input
              type="text"
              name="kind"
              id="kind-of-furniture"
              placeholder="kind of furniture"
            value={values.kind}
            onChange={changeHandler}
            />

            <input
              type="text"
              name="wood"
              id="type-of-wood"
              placeholder="type of wood"
            value={values.wood}
            onChange={changeHandler}
            />

            <input
              type="text"
              name="width"
              id="width"
              placeholder="width in mm"
            value={values.width}
            onChange={changeHandler}
            />
            
            {/* <input
            type="text"
            name="height"
            id="height"
            placeholder="height in mm"
            value={values.height}
            onChange={changeHandler}
            /> */}

            <input
            type="text"
            name="price"
            id="price"
            placeholder="EUR"
            value={values.price}
            onChange={changeHandler}
            />

            <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="image url"
            value={values.imageUrl}
            onChange={changeHandler}
            />
            <div className="edit-cancel-btns">
              <button className="btn-edit" type="submit">Edit Furniture</button>
              <Link to={`/catalog`} className="btn-cancel" type="submit">Cancel</Link> 
            </div>
          </form>

          <div className="drops">
              <div className="drop drop-1"></div>
              <div className="drop drop-2"></div>
              <div className="drop drop-3"></div>
              <div className="drop drop-4"></div>
              <div className="drop drop-5"></div>
              <div className="drop drop-6"></div>
              <div className="drop drop-7"></div>
            </div>
        </div>
     


     
    </section>
    )
}