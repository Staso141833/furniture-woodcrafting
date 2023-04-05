import "./edit.css";

export const Edit = () => {
    return (
    <section id="edit">
        <div className="edit-form-conainter">
        
      
          <form className="form-edit">
      
             <div className="edit-furniture">
              <h2>Edit furniture</h2>
             </div>
        
             
            <input
              type="text"
              name="kind"
              id="kind-of-furniture"
              placeholder="kind of furniture"
            />

            <input
              type="text"
              name="wood-type"
              id="type-of-wood"
              placeholder="type of wood"
            />

            <input
              type="text"
              name="width"
              id="width"
              placeholder="width in mm"
            />
            
            <input
            type="text"
            name="height"
            id="height"
            placeholder="height in mm"
            />

            <input
            type="text"
            name="currency"
            id="currency"
            placeholder="EUR"
            />

            <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="image url"
            />

            <button className="btn-edit" type="submit">Edit Furniture</button>

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