import FeaturedPostCard from "./FeaturedPostCard";
import { Link } from "react-router-dom";
const FeaturedPosts = ({ posts, link, header }) => {
  return (
    <section className="container py-5 ">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold featured-post-header py-1 px-3 ">{header}</h2>

        <Link to="/entreprenuer" className="text-primary text-decoration-none">
         {link}
        </Link>
      </div>

      <div className="row g-4">
        {posts.map(post => (
          <div key={post.id} className="col-md-4">
            <FeaturedPostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
