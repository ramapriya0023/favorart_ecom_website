import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { img, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
        alt="My Image"
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>View Products</p>
      </div>
    </div>
  );
};

export default CategoryItem;
