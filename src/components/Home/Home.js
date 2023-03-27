import "./home.css";

export const Home = () => {
  return (
    <section id="home">
      <div className="home-header-1">
        <h1>GES Furniture & Woodcrafting</h1>
      </div>
      <div className="home-elements">
        <div className="home-list-items">
          <ul>
            <li>
              <i className="fas fa-hand-point-right"></i>
              <a href="/">REAL WOOD</a>
            </li>
            <li>
              <i className="fas fa-paint-brush"></i>
              <a href="/">ANY COLOR</a>
            </li>
          </ul>
        </div>
        <div className="home-background">
          <img id="background-pic" src="./kitchen1.jpg" alt="kitchen" />
        </div>
      </div>
    </section>
  );
};
