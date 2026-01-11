
import LeadershipPostCard from "./LeadershipPostCard";
import leadership_banner_one from '../../images/leadership-banner.webp'
// import leadership_banner_four from '../../images/leadership-banner-IV.webp'

const LeadershipPosts = ({ posts}) => {
  return (
    <section className="container py-md-5 py-0 ">
      <div className="mb-md-4 mb-0 ">
        <div className=" banner-wrapper d-flex justify-content-between" style={{ height: "150px" }}>
          <h2 className="d-block d-md-none fs-1 fw-bolder">Leadership</h2>
         <img src={leadership_banner_one} alt="leadership-banner" srcset=""  className=" leadership-banner-img d-none d-md-block"/>
         <button className=" btn-leadership btn text-white fw-semibold align">
          Read More
         </button>

        </div>
      </div>
      <div className="row g-4">
        {posts.map(post => (
          <div key={post.id} className="col-md-3">
            <LeadershipPostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipPosts;
