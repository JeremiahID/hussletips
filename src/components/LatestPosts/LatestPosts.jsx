import PostCard from "./PostCard";

const LatestPosts = ({ posts }) => {
  return (
    <section className=" bg-light">
      <h3 className="fw-bold mb-4">Latest Tips and Insights</h3>

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default LatestPosts;
