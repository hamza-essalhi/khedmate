import { Link } from "react-router-dom";

//images
import bannerImage from "../../images/banner.png";
import userImage from "../../images/user.jpg";

//Icons
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications, IoMdSearch,IoMdMenu } from "react-icons/io";
//utls
import { useEffect, useState } from "react";
const MainNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const menuHandler = () => setMenuOpen(!menuOpen);
  
  return (
    <nav className= {menuOpen ? "main-nav-active" : "main-nav-bar" }>
      <div className="banner">
          <Link to="/" className="text-banner">
            <IoMdSearch className='search-icon'></IoMdSearch>
            <span>K</span>
          </Link>

          <Link to="/">
            <img src={bannerImage} alt="" />
          </Link>
        </div>
      <div className="left">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to="/">
              <AiFillMessage></AiFillMessage>
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoMdNotifications></IoMdNotifications>
            </Link>
          </li>
          <li className="user-side">
            <img src={userImage} alt="" />
          </li>
        </ul>
      </div>
      <div className="menu">
        <button className="btn-menu" onClick={menuHandler} >  <IoMdMenu ></IoMdMenu></button>
      </div>
    </nav>
  );
};

export default MainNavBar;