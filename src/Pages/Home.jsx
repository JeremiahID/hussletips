// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import blogposts from "../data/blogposts";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />

      <FeaturedPosts posts={blogposts} />
      
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <LatestPosts posts={blogposts} />
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

