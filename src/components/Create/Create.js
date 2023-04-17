import "./create.css";

import { useForm } from "../../hooks/useForm.js";
import { useFurnitureContext } from "../../contexts/FurnitureContext.js";
import { useState } from "react";



export const Create = () => {

 
  const {onCreateFurnitureSubmit} = useFurnitureContext()
  const {values, changeHandler, onSubmit} = useForm({
    kind: "",
    wood: "",
    width: "",
    price: "",
    imageUrl: ""
  }, onCreateFurnitureSubmit)

  const [formErrors, setFormErrors] = useState({
    kind: '',
    lastName: '',
});


  const formValidate = (e) => {

    const value = e.target.value;
    const errors = {};

    if (e.target.name === 'kind' && (value.length < 3 || value.length > 20)){
      errors.kind = 'Kind should be between 3 and 20 characters';

      setFormErrors(errors);
    }
  }
    return ( 
       <section id="create">

              
        <div className="create-form-conainter">
        
          <form className="form-create" method="POST" onSubmit={onSubmit}>
  
             <div className="create-furniture">
              <h2>Create your furniture</h2>
             </div>
        
             <div className="input-error-container">
             <input
              type="text"
              name="kind"
              id="kind-of-furniture"
              placeholder="kind of furniture"
            value={values.kind}
            onChange={changeHandler}
            onBlur={formValidate}
            />
            <div>
              {formErrors.kind && <p className="form-error">{formErrors.kind}</p>}
            </div>
             </div>
           

            <input
              type="text"
              name="wood"
              id="wood"
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
    

            <input
            type="text"
            name="price"
            id="price"
            placeholder="price in euro"
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

            <button className="btn-create" type="submit">Create Furniture</button>

            <button className="btn-cancel" type="submit">Cancel</button>
       
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