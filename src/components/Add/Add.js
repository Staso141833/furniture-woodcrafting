import "./add.css";
import { useState } from "react";

<link
rel="stylesheet"
href="https://use.fontawesome.com/releases/v5.10.2/css/all.css"
/>

export const Add = ({
  onCreateFurnitureSubmit,
}) => {

  const [values, setValues] = useState({
    kind: "",
    wood: "",
    width: "",
    height: "",
    price: "",
    imageUrl: ""
  })

  const onChangeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]: e.target.value}))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateFurnitureSubmit(values)
  }


    return ( 
       <section id="create">

              
        <div className="add-form-conainter">
        
          <div className="add-form-conainter-img">
            <img src="https://preview.redd.it/traditional-filipino-wood-carving-art-v0-vlljsjsofiv91.jpg?width=640&crop=smart&auto=webp&s=9b3f9d5495235177ddba14b3b80811064e1b3cf6" alt=""/>
          </div>
          <form className="form-create" onSubmit={onSubmit}>
  
             <div className="add-furniture">
              <h2>Add your furniture</h2>
             </div>
        
             
            <input
              type="text"
              name="kind"
              id="kind-of-furniture"
              placeholder="kind of furniture"
            value={values.kind}
            onChange={onChangeHandler}
            />

            <input
              type="text"
              name="wood"
              id="wood"
              placeholder="type of wood"
            value={values.wood}
            onChange={onChangeHandler}
            />

            <input
              type="text"
              name="width"
              id="width"
              placeholder="width in mm"
            value={values.width}
            onChange={onChangeHandler}
            />
            
            <input
            type="text"
            name="height"
            id="height"
            placeholder="height in mm"
            value={values.height}
            onChange={onChangeHandler}
            />

            <input
            type="text"
            name="price"
            id="price"
            placeholder="price in euro"
            value={values.price}
            onChange={onChangeHandler}
            />

            <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="image url"
            value={values.imageUrl}
            onChange={onChangeHandler}
            />

            <button className="btn-add" type="submit" onSubmit={onSubmit}>Add Furniture</button>

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