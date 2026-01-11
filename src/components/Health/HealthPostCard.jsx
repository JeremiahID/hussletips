const HealthPostCard = ({ post }) => {
  return (
    <div className="d-flex bg-info mt-2">
      <div className="bg-secondary rounded me-3 health-post-card-img"></div>

      <div className="d-flex flex-column align-items-start justify-content-evenly bg-dark w-50">
        <small className="text-primary fw-semibold">{post.category}</small>
        <h6 className="fw-bold mb-1">{post.title}</h6>
        <p className=" small mb-1">{post.excerpt}</p>
        <a href={`/post/${post.id}`} className="text-primary small">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default HealthPostCard;
