const HealthPostCard = ({ post }) => {
  return (
    <div className="mt-4 card flex-row shadow-sm border-0">
      <div className="bg-secondary me-3 health-post-card-img"></div>

      <div className="d-flex flex-column align-items-start justify-content-between w-50">
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
