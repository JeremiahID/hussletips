import HealthPostCard from "./HealthPostCard";

const HealthPosts = ({ posts }) => {
    return ( 
        <div className="container py-3 ">
            <div className="row d-flex ">
                <div className="col-md-9 col-12">
                    {posts.map(post => (
                        <HealthPostCard key ={post.id} post={post} />
                    ))}
                </div>
                <div className="col-md-3 col-12 bg-primary mt-2" >

                </div>
            </div>
      </div>
     );
}
 
export default HealthPosts;