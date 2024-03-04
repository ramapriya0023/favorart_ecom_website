const App = () => {
  const categories = [
    {
      id: 1,
      title: "Key chain holders",
    },
    {
      id: 2,
      title: "Paintings",
    },
    {
      id: 3,
      title: "Resin Art",
    },
    {
      id: 4,
      title: "Dream catchers",
    },
    {
      id: 5,
      title: "Wall hangings",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container">
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>View Products</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
