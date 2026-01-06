import FeaturedPostCard from "./FeaturedPostCard";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className="container py-5 ">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Featured Artcles</h2>
        <a href="#" className="text-primary text-decoration-none">
          See all →
        </a>
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
