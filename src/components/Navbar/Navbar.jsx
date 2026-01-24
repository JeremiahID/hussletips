import { useState } from 'react';
import searchIcon from '../../icons/search.svg';
import logo from '../../images/logo 2.png'
import { Link } from 'react-router-dom';
import SearchModal from '../SearchModal/SearchModal';

const Navbar = () => {

  // const [OpenSearch, setOpenSerch] = useState(true)

  // function handleSearch (){
  //   console.log("Button click")
  //   setOpenSerch(!OpenSearch)
  //   console.log(OpenSearch)
  // }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-0" data-aos="fade-down">
      <div className=" container d-flex  justify-content-around py-2" >
       <Link to="/" className="navbar-brand d-flex align-items-center gap-2"  data-aos="fade-right">
          <img src={logo} alt="HustleTips Logo" className="logo-img" />
          <div className="d-flex flex-column lh-1">
            <span className="fw-bold fs-3 lh-1">HustleTips</span>
            <small className="fw-light ">Empower & Inspire</small>
          </div>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 


        {/* NAVIGATIONS LINKS WRAPPER */}
        <div className="collapse navbar-collapse " id="navMenu" >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 fw-bold fs-5" data-aos="fade-up">
            <li className="nav-item" data-aos="zoom-in" data-aos-delay="300">
              <Link className='nav-link fw-bold fs-5' to="/entreprenuer"> Entrepreneur </Link>
            </li>
            <li className="nav-item" data-aos="zoom-in" data-aos-delay="400">
              <Link className='nav-link fw-bold fs-5' to='/digital-markerting'> Digital Marketing </Link>
            </li>
            <li className="nav-item" data-aos="zoom-in" data-aos-delay="500">
              <Link className='nav-link fw-bold fs-5' to="/business"> Business </Link>
            </li>
            <li className="nav-item" data-aos="zoom-in" data-aos-delay="600">
              <Link className='nav-link fw-bold fs-5' to="/inspire" > Inspire </Link>
            </li>
            <li className="nav-item" data-aos="zoom-in" data-aos-delay="700">
              <Link className="nav-link fw-bold fs-5" to="/health">Health</Link>
            </li>
          </ul>


          {/* search button WRAPPER */}
          <button 
            // onClick={handleSearch}
            className='svg-button' 
            data-aos-delay="800"
            aria-label="Search">
            <img  className ='navbar-svg-button' src={searchIcon} alt="searchIcon"  width="18"  />
          </button>
        </div>
      </div>
      {/* {OpenSearch ? <SearchModal /> : null} */}
    </nav>
  );
};

export default Navbar;
