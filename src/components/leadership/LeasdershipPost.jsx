
import LeadershipPostCard from "./LeadershipPostCard";
import leadership_banner from '../../images/leadership-banner.webp'
const LeadershipPosts = ({ posts, link, header }) => {
  return (
    <section className="container   py-5 ">
      <div className="mb-4">
        <div className=" bg-info d-flex" style={{ height: "150px" }}>
         <img src={leadership_banner} alt="leadership-banner" srcset=""  className=" img-fluid leadership-banner-img col-4"/>
        </div>
      </div>
      <div className="row g-4">
        {posts.map(post => (
          <div key={post.id} className="col-md-4">
            <LeadershipPostCard post={post} />
          </div>
        ))}
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
