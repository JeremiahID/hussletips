import { Link } from "react-router-dom";



const EntreprenuerPageCard = ({ post }) => {

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="bg-secondary" style={{ height: "180px" }}>
        <img
            src= {post.image}
            alt="Hero"
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
        />

      </div>

      <div className="card-body">
        <span className=" text-primary small fw-semibold">
          {post.category}
        </span>

        <h5 className="card-title mt-2">
          {post.title}
        </h5>

        <p className="card-text text-muted">
          {post.excerpt}
        </p>

        <Link to="" className="text-primary text-decoration-none">
            Read More →
        </Link>
      </div>
    </div>
  );
};

export default EntreprenuerPageCard;
