import { db } from "../../config/firebase.js";

import "./create.css";

import { useForm } from "../../hooks/useForm.js";
import { useFurnitureContext } from "../../contexts/FurnitureContext.js";
import { useState } from "react";

export const Create = () => {
  const { onCreateFurnitureSubmit } = useFurnitureContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      kind: "",
      wood: "",
      width: "",
      price: "",
      imageUrl: "",
    },
    onCreateFurnitureSubmit
  );

  const [formErrors, setFormErrors] = useState({
    kind: "",
    wood: "",
    width: "",
    price: "",
    imageUrl: "",
  });

  const formValidate = (e) => {
    e.preventDefault();
    const errors = {};

    if (values.kind.length < 5 || values.kind.length > 20) {
      errors.kind = "Kind should be between 5 and 20 characters.";
    } else {
      errors.kind = "";
    }

    if (values.wood.length < 3 || values.wood.length > 20) {
      errors.wood =
        "The wood of the furniture should be between 3 and 20 characters.";
    } else {
      errors.wood = "";
    }

    if (values.width < 50) {
      errors.width =
        "The width of the furniture should be equal or greater than 50mm.";
    } else if (values.width > 200) {
      errors.width =
        "The width of the furniture should be equal or smaller than 200mm.";
    } else {
      errors.width = "";
    }

    if (values.price.length === 0 || values.price.length > 6) {
      errors.price = "Invalid price.";
    } else {
      errors.price = "";
    }

    if (values.imageUrl.length === 0) {
      errors.imageUrl = "The field is required.";
    } else {
      errors.imageUrl = "";
    }

    setFormErrors(errors);
    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      onSubmit(e);
    }
  };

  return (
    <section id="create">
      <div className="create-form-conainter">
        <form className="form-create" method="POST" onSubmit={formValidate}>
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
              />

              <div className="form-error-container">
                {formErrors.kind && (
                  <p className="form-error-p">{formErrors.kind}</p>
                )}
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
              />

              <div className="form-error-container">
                {formErrors.wood && (
                  <p className="form-error-p">{formErrors.wood}</p>
                )}
              </div>
            </div>

            <div className="input-error-container">
              <input
                type="number"
                name="width"
                id="width"
                placeholder="width in cm"
                value={values.width}
                onChange={changeHandler}
              />
              <div className="form-error-container">
                {formErrors.width && (
                  <p className="form-error-p">{formErrors.width}</p>
                )}
              </div>
            </div>

            <div className="input-error-container">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price (f. e. 159.99)"
                value={values.price}
                onChange={changeHandler}
              />

              <div className="form-error-container">
                {formErrors.price && (
                  <p className="form-error-p">{formErrors.price}</p>
                )}
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
              />
              <div className="form-error-container">
                {formErrors.imageUrl && (
                  <p className="form-error-p">{formErrors.imageUrl}</p>
                )}
              </div>
            </div>
          </div>

          <div className="create-cancel-btns">
            <button className="btn-create" type="submit" disabled={false}>
              Create Furniture
            </button>
            <button className="btn-cancel">Cancel</button>
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
  );
};
