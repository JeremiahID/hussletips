

const AsidePostCard = ({ post }) => {
    return ( 
        <section className="h-100 m-0">
            <div className="card-body h-100 p-0">
                <div className="position-relative h-100 img-wrapper">
                          <img
                                src= {post.image}
                                alt="Hero"
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                </div>
                <div className=" card-body-content " >
                    <span className=" fw-semibold">
                        {post.category}
                    </span>

                    <h5 className="card-title mt-2 fs-4 ">
                        <a href="#" className="">
                                {post.title}
                        </a>
                    </h5>

                    <p className="card-text">
                        {post.author} {post.date}
                    </p>
                </div>

            </div>
        </section>
     );
}
 
export default AsidePostCard;