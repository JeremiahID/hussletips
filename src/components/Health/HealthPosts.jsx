import HealthPostCard from "./HealthPostCard";

const HealthPosts = ({ posts }) => {
    return ( 
        <div className="container py-3 bg-info ">
            <div className="row d-flex ">
                <div className="col-md-9 col-12">
                    {posts.map(post => (
                        <HealthPostCard key ={post.id} post={post} />
                    ))}
                </div>
                <div className="card col-md-3 col-12 shadow border-0 mt-2 aside-post-card " >

                </div>
            </div>
      </div>
     );
}
 
export default HealthPosts;