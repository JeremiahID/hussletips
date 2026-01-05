const Categories = () => {
  return (
    <div className="card mb-4 border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">Categories</h5>

        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-warning text-dark">Business</span>
          <span className="badge bg-warning text-dark">Marketing</span>
          <span className="badge bg-warning text-dark">Finance</span>
          <span className="badge bg-warning text-dark">Health</span>
          <span className="badge bg-warning text-dark">Lifestyle</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
