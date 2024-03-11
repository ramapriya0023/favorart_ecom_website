import "./categories.styles.scss";
import dream_catcher from "./resources/Dream_catchers.jpeg";
import key_chain_holder from "./resources/key_chain_holder.webp";
import resin_art from "./resources/Resin_art.jpeg";
import paintings from "./resources/Paintings.webp";
import wall_hangings from "./resources/wall_hangings.jpeg";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Key chain holders",
      img: dream_catcher,
    },
    {
      id: 2,
      title: "Paintings",
      img: paintings,
    },
    {
      id: 3,
      title: "Resin Art",
      img: resin_art,
    },
    {
      id: 4,
      title: "Dream catchers",
      img: dream_catcher,
    },
    {
      id: 5,
      title: "Wall hangings",
      img: wall_hangings,
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id, img }) => (
        <div key={id} className="category-container">
          <img className="background-image" src={img} alt="My Image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>View Products</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
