import AsidePostCard from "./AsidePostCard";

const AsideHealthPosts = ({ posts }) => {
    return ( 
        <section className=" bg-black h-100">
            {posts.map(post => (
                <AsidePostCard key = {post.id} post={post} />
            ))}
        </section>
     );
}
 
export default AsideHealthPosts;