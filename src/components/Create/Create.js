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
    wood: '',
    width: '',
    price: '',
    imageUrl: '',
});


  const formValidate = (e) => {

    const value = e.target.value;
    const fieldName = e.target.name;
    const errors = {};



    if (fieldName === 'kind' && (value.length < 5 || value.length > 20)){
        errors.kind = 'Kind should be between 5 and 20 characters.';

    }  else {
        errors.kind = '';
        setFormErrors(errors);
    }
 
  
    if(fieldName === 'wood' && (value.length < 3 || value.length > 20)){
        errors.wood = 'The wood of the furniture should be between 3 and 20 characters.';

    } else {
        errors.wood = '';
        setFormErrors(errors);
    }


    if (fieldName === 'width' && value < 50) {
        errors.width = 'The width of the furniture should be equal or greater than 50mm.';
        
    } else if (fieldName === 'width' && value > 200){
        errors.width = 'The width of the furniture should be equal or smaller than 200mm.'
    }else {
        errors.width = '';
        setFormErrors(errors);
    }


    if (fieldName === 'price' && (value.length === 0 || value.length > 6)){
        errors.price = 'Invalid price.';

    } else {
        errors.price = '';
        setFormErrors(errors);
    }


    if (fieldName === 'imageUrl' && value.length === 0) {
        errors.imageUrl = 'The field is required.';
    
    } else {
        errors.imageUrl = '';
        setFormErrors(errors);
    }



  setFormErrors(errors);

}


    return ( 
       <section id="create">

              
        <div className="create-form-conainter">
        
          <form className="form-create" method="POST" onSubmit={onSubmit}>
  
             <div className="create-furniture">
              <h2>Create your furniture</h2>
             </div>
              
              <div className="input-container">
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

                      <div className="form-error-container">
                        {formErrors.kind && <p className="form-error-p">{formErrors.kind}</p>}
                      </div>
                  </div>
            
                  <div className="input-error-container">
                          <input
                            type="text"
                            name="wood"
                            id="wood"
                            placeholder="type of wood"
                            value={values.wood}
                            onChange={changeHandler}
                            onBlur={formValidate}
                          />

                          <div className="form-error-container">
                            {formErrors.wood && <p className="form-error-p">{formErrors.wood}</p>}
                          </div>
                  </div>
            
                  <div className="input-error-container">
                    <input
                      type="number"
                      name="width"
                      id="width"
                      placeholder="width in mm"
                      value={values.width}
                      onChange={changeHandler}
                      onBlur={formValidate}
                    />
                    <div className="form-error-container">
                       {formErrors.width && <p className="form-error-p">{formErrors.width}</p>}
                    </div>
                  </div>
        
      
                  <div className="input-error-container">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="example 159.99"
                      value={values.price}
                      onChange={changeHandler}
                      onBlur={formValidate}
                    />

                    <div className="form-error-container">
                    {formErrors.price && <p className="form-error-p">{formErrors.price}</p>}
                    </div>
                  </div>
            
                  <div className="input-error-container">
                  <input
                      type="text"
                      name="imageUrl"
                      id="imageUrl"
                      placeholder="image url"
                      value={values.imageUrl}
                      onChange={changeHandler}
                      onBlur={formValidate}
                      />
                    <div className="form-error-container">
                       {formErrors.imageUrl && <p className="form-error-p">{formErrors.imageUrl}</p>} 
                    </div>

                  </div>

              </div>
           
            <div className="create-cancel-btns">
              <button className="btn-create" type="submit">Create Furniture</button>
              <button className="btn-cancel" type="submit">Cancel</button>
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