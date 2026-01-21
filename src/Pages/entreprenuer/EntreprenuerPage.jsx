import EntreprenuerPageCard from "./EntreprenuerPageCard";
import EntrepreneurImage from "../../images/Entreprenuer.png"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";




const EntreprenuerPage = ({ posts, header }) => {
  return (
    <>
        <Navbar />

        <section className="container py-5 ">
        <div className="d-flex justify-content-center align-items-center mb-4 ">
            <img src={EntrepreneurImage} alt="Entreprenuer" className="d-block d-md-none" />
            <h2 className="fw-bold featured-post-header text-center fs-1 py-1 px-3 d-md-block d-none ">{header}</h2>
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
