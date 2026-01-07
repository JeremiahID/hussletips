const LeadershipPostCard = ({ post }) => {
  return (
    <div className="card h-100 shadow-sm border-0 d-flex ">
      <div className="bg-secondary" style={{ height: "180px" }}></div>

      <div className="card-body  d-flex flex-column justify-content-evenly">
        <span className=" text-primary small fw-semibold">
          {post.category}
        </span>

        <h5 className="card-title mt-2">
          {post.title}
        </h5>

        <p className="card-text text-muted">
          {post.excerpt}
        </p>

        <a href={`/post/${post.id}`} className="text-primary text-decoration-none">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default LeadershipPostCard;
