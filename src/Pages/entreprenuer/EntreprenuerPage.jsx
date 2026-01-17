import EntreprenuerPageCard from "./EntreprenuerPageCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const EntreprenuerPage = ({ posts, link, header }) => {
  return (
    <>
        <Navbar />

        <section className="container py-5 ">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold featured-post-header py-1 px-3 ">{header}</h2>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-primary text-decoration-none">
            {link}
            </a>
        </div>

        <div className="row g-4">
            {posts.map(post => (
            <div key={post.id} className="col-md-4">
                <EntreprenuerPageCard post = { post } />
            </div>
            ))}
        </div>
        </section>
        
        <Footer />
    </>
  );
};

export default EntreprenuerPage;
