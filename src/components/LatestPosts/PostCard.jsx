const PostCard = ({ post }) => {
  return (
    <div className="d-flex mb-4">
      <div className="bg-secondary rounded me-3" style={{ width: "120px", height: "90px" }}>
          <img
              src= {post.image}
              alt="Hero"
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
          />
      </div>

      <div>
        <small className="text-primary fw-semibold">{post.category}</small>
        <h6 className="fw-bold mb-1">{post.title}</h6>
        <p className="text-muted small mb-1">{post.excerpt}</p>
        <a href={`/post/${post.id}`} className="text-primary small">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default PostCard;
