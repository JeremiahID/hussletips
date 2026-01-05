const PostCard = ({ post }) => {
  return (
    <div className="d-flex mb-4">
      <div className="bg-secondary rounded me-3" style={{ width: "120px", height: "90px" }}></div>

      <div>
        <small className="text-warning fw-semibold">{post.category}</small>
        <h6 className="fw-bold mb-1">{post.title}</h6>
        <p className="text-muted small mb-1">{post.excerpt}</p>
        <a href={`/post/${post.id}`} className="text-warning small">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default PostCard;
