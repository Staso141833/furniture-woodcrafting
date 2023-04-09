import "./add.css";

import { useForm } from "../../hooks/useForm.js";
import { useFurnitureContext } from "../../contexts/FurnitureContext.js";



export const Add = () => {

 
  const {onCreateFurnitureSubmit} = useFurnitureContext()
  const {values, changeHandler, onSubmit} = useForm({
    kind: "",
    wood: "",
    width: "",
    height: "",
    price: "",
    imageUrl: ""
  }, onCreateFurnitureSubmit)


    return ( 
       <section id="create">

              
        <div className="add-form-conainter">
        
          <div className="add-form-conainter-img">
            <img src="https://preview.redd.it/traditional-filipino-wood-carving-art-v0-vlljsjsofiv91.jpg?width=640&crop=smart&auto=webp&s=9b3f9d5495235177ddba14b3b80811064e1b3cf6" alt=""/>
          </div>
          <form className="form-create" method="POST" onSubmit={onSubmit}>
  
             <div className="add-furniture">
              <h2>Add your furniture</h2>
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
            name="height"
            id="height"
            placeholder="height in mm"
            value={values.height}
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

            <button className="btn-add" type="submit">Add Furniture</button>

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