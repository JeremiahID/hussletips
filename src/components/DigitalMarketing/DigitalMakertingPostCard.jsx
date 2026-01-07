const DigitalMarkertingPostCard = ({ post }) => {
    return ( 
        <div className=" card ">
            <div className="card-body  p-0">
                <div className="position-relative img-wrapper bg-black">
                          {/* <img
                                src= {post.image}
                                alt="Hero"
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            /> */}
                </div>
                <div className=" card-body-content   d-flex flex-column  justify-content-evenly  text-white" >
                    <span className=" text-white small fw-semibold">
                        {post.category}
                    </span>

                    <h5 className="card-title mt-2 fs-3 text-white">
                    <a href="#" className="text-white">
                            {post.title}
                    </a>
                    </h5>

                    <p className="card-text card-text-author-date">
                        {post.author} {post.date}
                    </p>
                </div>

            </div>
        </div>
    );
}
 
export default DigitalMarkertingPostCard;