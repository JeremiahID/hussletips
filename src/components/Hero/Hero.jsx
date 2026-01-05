const Hero = () => {
  return (
    <section className="bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              Empower and Inspire
            </h1>
            <p className="lead text-muted mt-3">
              Helping individuals improve their skills and achieve success in their field.
            </p>
            <button className="btn btn-warning btn-lg mt-3">
              Get Started
            </button>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <div className="bg-secondary rounded" style={{ height: "300px" }}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
