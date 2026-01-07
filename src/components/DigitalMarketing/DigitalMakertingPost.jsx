import DigitalMarkertingPostCard from "./DigitalMakertingPostCard";

const DigitalMarkertingPosts = ({ posts }) => {
    return ( 
        <div className="digital-marketing row m-0 ">
            {posts.map(post =>(
                <div key={post.id} className="col-4">
                    <DigitalMarkertingPostCard  post = { post }/>
                </div>
            ))}
        </div>
    );
}
 
export default DigitalMarkertingPosts;