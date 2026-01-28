import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";



const CategoryPage = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/posts?category=${slug}`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, [slug]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">{slug.toUpperCase()}</h2>
      {posts.map(post => (
        <div key={post.id} className="mb-4">
          <Link to={`/post/${post.id}`} className="fw-semibold text-decoration-none">
            {post.title}
          </Link>
          <p className="text-muted small">{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
