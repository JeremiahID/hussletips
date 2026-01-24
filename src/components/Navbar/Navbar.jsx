import searchIcon from '../../icons/search.svg';
import logo from '../../images/logo 2.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-0">
      <div className=" container d-flex  justify-content-around py-2">

        {/* LOGO WRAPPER */}
        <div className="logo d-flex m-0  ">
          <img src={logo} alt="" srcset="" className='logo-img' />
          <div className="site-name d-flex flex-column align-items-center justify-content-center">
            <Link className="navbar-brand fw-bold fs-3 lh-1" to="/"> HustleTips </Link>
            <Link className='navbar-brand fw-light fs-6  lh-2' to="/" > Empower and Inspire  </Link>
          </div>
        </div>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}


        {/* NAVIGATIONS LINKS WRAPPER */}
        <div className="collapse navbar-collapse " id="navMenu" >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 fw-bold fs-5">
            <li className="nav-item">
              <Link className='nav-link fw-bold fs-5' to="/entreprenuer"> Entrepreneur </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link fw-bold fs-5' to='/digital-markerting'> Digital Marketing </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link fw-bold fs-5' to="/entreprenuer"> Business </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link fw-bold fs-5' to="/entreprenuer" > Inspire </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-5" to="/entreprenuer">Health</Link>
            </li>
          </ul>


          {/* search button WRAPPER */}
          <button className='svg-button'>
            <img  className ='navbar-svg-button' src={searchIcon} alt="searchIcon"  />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
