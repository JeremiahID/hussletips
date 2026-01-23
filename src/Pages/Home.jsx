import Hero from "../components/Hero/Hero";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Featuredblogposts from "../data/featuredblogposts";
import Latestblogposts from "../data/lastestblogposts";
import Leadershipblogposts from "../data/leadershipblogposts"
import LeadershipPosts from "../components/leadership/LeasdershipPost";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Sidebar from "../components/Sidebar/Sidebar";
import DigitalMarkertingPosts from "../components/DigitalMarketing/DigitalMakertingPost";
import DigitalMakertingBlogPosts from "../data/digitalmakertingposts";
import HealthPosts from "../components/Health/HealthPosts";
import Healthblogposts from "../data/healthblogposts";
import CurrencyUpdates from "../components/CurrencyUpdates/CurrencyUpdates";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Hero />

      <FeaturedPosts posts={Featuredblogposts} link={'See all →'} header = {'Entreprenuer'} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <LatestPosts posts={Latestblogposts} />
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <LeadershipPosts posts={Leadershipblogposts} />
      <DigitalMarkertingPosts posts={DigitalMakertingBlogPosts} link={'See all →'} header = {'Digital Markerting'} />
      <HealthPosts posts={Healthblogposts}  />
      <CurrencyUpdates />
      <Footer />
    </>
  );
};

export default Home;

