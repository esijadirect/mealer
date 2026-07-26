

const Category = ({loading, error, categories}) => {
  return (
      <section className="categories" id="categories">
          <div className="container">
            <div className="section-head">
              <h2>Pick a category</h2>
              <span className="badge bg-primary" id="category-count">
                {categories.length} categories
              </span>
            </div>
            <div className="row" id="category-grid">
              {
                loading && <div className="spinner-grow" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>

              }

              {
                !loading && categories.length > 0 && categories.map(function(cat, index){
                  return (
                      <div className="col-12 col-sm-6 col-lg-4 card-col" key={index}>
                        <article className="recipe-card">
                          <span className="pin" aria-hidden="true" />
                          <div className="recipe-thumb-wrap">
                            <img
                              className="recipe-thumb"
                              src={cat.strCategoryThumb}
                              alt={cat.strCategory}
                              loading="lazy"
                            />
                          </div>
                          <div className="recipe-body">
                            <div className="recipe-id">CAT. {cat.idCategory}</div>
                            <h3 className="recipe-title">{cat.strCategory}</h3>
                            <p className="recipe-desc">
                              {cat.strCategoryDescription}
                            </p>
                            <a href="#" className="recipe-link" data-category={cat.strCategory}>
                              View recipes <span className="arrow">→</span>
                            </a>
                          </div>
                        </article>
                      </div>
                  )
                })
              }
              
   
            </div>
          </div>
        </section>

  )
}

export default Category