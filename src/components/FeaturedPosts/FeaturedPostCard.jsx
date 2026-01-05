const FeaturedPostCard = ({ post }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="bg-secondary" style={{ height: "180px" }}></div>

      <div className="card-body">
        <span className="text-warning small fw-semibold">
          {post.category}
        </span>

        <h5 className="card-title mt-2">
          {post.title}
        </h5>

        <p className="card-text text-muted">
          {post.excerpt}
        </p>

        <a href={`/post/${post.id}`} className="text-warning text-decoration-none">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
