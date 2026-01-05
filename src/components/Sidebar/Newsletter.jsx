const Newsletter = () => {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">
          Join Our Newsletter
        </h5>

        <p className="text-muted small">
          Get weekly tips and insights delivered straight to your inbox.
        </p>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
        />

        <button className="btn btn-warning w-100 fw-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
