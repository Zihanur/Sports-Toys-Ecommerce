import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/M55yMZq/logo.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Get Exciting Sports Toys</h1>
          <p className="mb-5">
            Elevate your playtime with our incredible selection of sports toys.
            From basketball and soccer to baseball and more, we have everything
            you need to ignite your passion for sports. Get in the game today!
          </p>
          <Link to={"/alltoys"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
