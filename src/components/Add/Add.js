import "./add.css";

<link
rel="stylesheet"
href="https://use.fontawesome.com/releases/v5.10.2/css/all.css"
/>

export const Add = () => {
    return ( 
       <section id="create">

              
        <div className="add-form-conainter">
        
          <div className="add-form-conainter-img">
            <img src="https://preview.redd.it/traditional-filipino-wood-carving-art-v0-vlljsjsofiv91.jpg?width=640&crop=smart&auto=webp&s=9b3f9d5495235177ddba14b3b80811064e1b3cf6" alt=""/>
          </div>
          <form className="form-create">
  
             <div className="add-furniture">
              <h2>Add your furniture</h2>
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
            name="depth"
            id="depth"
            placeholder="depth in mm"
            />

            <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="image url"
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