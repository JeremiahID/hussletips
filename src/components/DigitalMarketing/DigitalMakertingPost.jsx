import DigitalMarkertingPostCard from "./DigitalMakertingPostCard";

const DigitalMarkertingPosts = ({ posts, header, link }) => {
    return ( 
        <section className="">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold featured-post-header py-1 px-3 ">{header}</h2>
                <a href="#" className="text-primary text-decoration-none px-3">
                    {link}
                </a>
            </div>
            <div className="digital-marketing row m-0 ">
                {posts.map(post =>(
                    <div key={post.id} className="col-4">
                        <DigitalMarkertingPostCard  post = { post }/>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default DigitalMarkertingPosts;