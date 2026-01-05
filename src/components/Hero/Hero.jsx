import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section className="hero-image">
      <Navbar/>
      <div className="container py-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              Empower and Inspire
            </h1>
            <p className=" text-muted mt-3">
              Helping individuals improve their skills and achieve success in their field.
            </p>
            <button className="btn btn-warning btn-lg mt-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
