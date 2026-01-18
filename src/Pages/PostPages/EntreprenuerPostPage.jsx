import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const EntreprenuerPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/${"entreprenuer-post/" + id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p className="text-center py-5">Loading...</p>;

  return (
    <>
      < Navbar />
      <div className="container py-5">
        <h1 className="fw-bold">{post.title}</h1>
        <p className="text-muted">{post.category}</p>
        <img src={post.image} alt={post.title} className="img-fluid mb-4" />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Footer />
    </>

  );
};

export default EntreprenuerPostPage;
