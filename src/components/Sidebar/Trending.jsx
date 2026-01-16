const Trending = () => {
  const trendingData = [
    {
      id: 1,
      title: "Productivity Hacks",
      image: "https://picsum.photos/600/400?random=1",
      icon: "🔥",
      category: 'Enterprenuer'
    },
    {
      id: 2,
      title: "Online Business",
      image: "https://picsum.photos/600/400?random=7",
      icon: "💡",
      category: 'Digital Marketing'
    },
    {
      id: 3,
      title: "Personal Growth",
      image: "https://picsum.photos/600/400?random=8",
      icon: "🚀",
      category: 'Inspire'
    },
  ];

  return (
    <div className="card mb-4 border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">Trending</h5>

        <ul className="list-group list-group-flush">

          {trendingData.map(item => (
            <li
              key={item.id}
              className="list-group-item px-0 d-flex  align-items-center gap-2"
            >
              <div className="bg-primary rounded me-3" style={{ width: "150px", height: "100px" }}>
                <img
                    src= {item.image}
                    alt="Hero"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className="d-flex flex-column">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                  <span className=" text-primary small fw-semibold">
                    {item.category}
                  </span>
                </div>

                <a href={[]} className="text-primary small">
                  Read More →
                </a>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trending;
