
import LeadershipPostCard from "./LeadershipPostCard";

const LeadershipPosts = ({ posts, link, header }) => {
  return (
    <section className="container py-5 ">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold featured-post-header py-1 px-3 ">{header}</h2>
        <a href="#" className="text-primary text-decoration-none">
          {link}
        </a>
      </div>

      <div className="row g-4">
        {posts.map(post => (
          <div key={post.id} className="col-md-4">
            <LeadershipPostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipPosts;
