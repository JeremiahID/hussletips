import HealthPostCard from "./HealthPostCard";

const HealthPosts = ({ posts }) => {
    return ( 
        <div className="container py-3 bg-warning ">
            <div className="row">
                <div className="col-9">
                    {posts.map(post => (
                        <HealthPostCard key ={post.id} post={post} />
                    ))}
                </div>
                <div className="col-md-3 bg-primary mt-2" >

                </div>
            </div>
      </div>
     );
}
 
export default HealthPosts;