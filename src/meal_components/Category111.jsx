
import { useState, useEffect } from "react";

const SectionHead = ({ title, count }) => {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <span className="count">{count}</span>
    </div>
  );
};

const CategoryCard = ({ id, name, thumb, description }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 card-col">
      <article className="recipe-card">
        <span className="pin" aria-hidden="true"></span>
        <div className="recipe-thumb-wrap" style={{ position: "relative" }}>
          {imageLoading && (
            <div
              className="spinner-border text-danger"
              role="status"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <img
            className="recipe-thumb"
            src={thumb}
            alt={name}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              opacity: imageLoading ? 0.5 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>
        <div className="recipe-body">
          <div className="recipe-id">{id}</div>
          <h3 className="recipe-title">{name}</h3>
          <p className="recipe-desc">{description}</p>
          <a href="#" className="recipe-link" data-category={name}>
            View recipes <span className="arrow">&rarr;</span>
          </a>
        </div>
      </article>
    </div>
  );
};

const CategoryGrid = ({ categories, loading }) => {
  if (loading) {
    return <div className="loading">Loading categories...</div>;
  }

  return (
    <div className="row" id="category-grid">
      {categories.map((cat, index) => (
        <CategoryCard
          key={cat.idCategory}
          id={`CAT. ${String(index + 1).padStart(2, "0")}`}
          name={cat.strCategory}
          thumb={cat.strCategoryThumb}
          description={cat.strCategoryDescription}
        />
      ))}
    </div>
  );
};

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories.slice(0, 20)); // Limit to 20 categories
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="categories" id="categories">
      <div className="container">
        <SectionHead
          title="Pick a category"
          count={`${categories.length} categories`}
        />
        <CategoryGrid categories={categories} loading={loading} />
      </div>
    </section>
  );
};

export default Category;