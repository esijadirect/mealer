
const Brand = () => {
  return (
    <a href="#" className="brand">
      Meal<span className="dot">DB</span>
    </a>
  );
};

const CreditLink = () => {
  return (
    <div>
      Data courtesy of{" "}
      <a
        href="https://www.themealdb.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TheMealDB
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
        <Brand />
        <CreditLink />
      </div>
    </footer>
  );
};
// usage of useEffect() hook: 1. useEffect(function(){}) 
// 2. useEffect(function(){}, []) 
// 3. useEffect(function(){}, [dependencies])


export default Footer;