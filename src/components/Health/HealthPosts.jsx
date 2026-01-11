import HealthPostCard from "./HealthPostCard";

const HealthPosts = ({ posts }) => {
    return ( 
        <div className="container py-5">
            <div className="row">
            <div className="col-md-8">
                {posts.map(post => (
                    <HealthPostCard key ={post.id} post={post} />
                ))}
            </div>
            <div className="col-md-4">

            </div>
            </div>
      </div>
     );
}
 
export default HealthPosts;