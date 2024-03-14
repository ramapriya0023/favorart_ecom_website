import dream_catcher from "../../resources/Dream_catchers.jpeg";
import key_chain_holder from "../../resources/key_chain_holder.webp";
import resin_art from "../../resources/Resin_art.jpeg";
import paintings from "../../resources/Paintings.webp";
import wall_hangings from "../../resources/wall_hangings.jpeg";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Key chain holders",
      img: key_chain_holder,
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
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
