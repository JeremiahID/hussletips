import HealthPostCard from "./HealthPostCard";
import AsideHealthblogposts from "../../data/asidehealthblogposts";
import AsideHealthPosts from "./AsideHealthPost";

const HealthPosts = ({ posts }) => {
    return ( 
        <div className="container py-3 ">
            <div className="row d-flex ">
                <div className="col-md-9 col-12">
                    {posts.map(post => (
                        <HealthPostCard key ={post.id} post={post} />
                    ))}
                </div>
                <div className="card col-md-3 col-12 shadow border-0 mt-4  p-0 aside-post-card " >
                    <AsideHealthPosts posts ={AsideHealthblogposts} />
                </div>
            </div>
      </div>
     );
}
 
export default HealthPosts;