
const HeroContent = () => {
    return (
        <div className="col-lg-7">
            <span className="eyebrow">14 categories, one kitchen</span>
            <h1>
                What's <em>cooking</em> today?
            </h1>
            <p className="lead">
                Every dish starts as a category on a card. Browse beef, pasta, vegan,
                dessert and more — pulled straight from TheMealDB — and find what
                you're making tonight.
            </p>
            <a href="#categories" className="btn-menu">
                Browse the menu
                <span>&rarr;</span>
            </a>
        </div>
    );
};

const HeroMark = () => {
    return (
        <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <svg
                className="hero-mark"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="150"
                    cy="150"
                    r="120"
                    stroke="#e4a825"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    opacity="0.5"
                />
                <circle
                    cx="150"
                    cy="150"
                    r="90"
                    stroke="#7c9070"
                    strokeWidth="1.5"
                    opacity="0.4"
                />
                <path
                    d="M100 90 L100 210 M100 90 C110 90 112 100 108 110 L104 120 L104 210"
                    stroke="#f3efe6"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M180 90 L180 210 M180 90 C165 95 165 130 180 140 L180 210"
                    stroke="#f3efe6"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="150" cy="150" r="4" fill="#c1432a" />
            </svg>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <HeroContent />
                    <HeroMark />
                </div>
            </div>
        </section>
    );
};

export default Hero;