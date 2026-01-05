import searchIcon from '../../icons/search.svg';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">HustleTips</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#">Entrepreneur</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Digital Marketing</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Business</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Inspire</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Health</a></li>
          </ul>

          <button className='svg-button'>
            <img  className ='navbar-svg-button' src={searchIcon} alt="searchIcon"  />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
