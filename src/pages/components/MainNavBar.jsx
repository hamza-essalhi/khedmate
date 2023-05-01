import { Link } from "react-router-dom";

//images
import bannerImage from "../../images/banner.png";
import userImage from "../../images/user.jpg";

//Icons
import { AiFillMessage } from "react-icons/ai";
import {
  IoMdNotifications,
  IoMdSearch,
  IoMdMenu,
  IoMdSettings,
  IoMdLogOut,
} from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
//utls
import { useEffect, useState } from "react";
const MainNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setMenuOpen(false);
        setUserMenuOpen(false)
      }
      
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  
  document.addEventListener('click', (event) => {
    const userButton = document.querySelector('#user-button');
    const navButton = document.querySelector('#nav-button')
    const isClickedUserButton = userButton.contains(event.target);
    const isClickedNavButton = navButton.contains(event.target);
  
    if (!isClickedUserButton ) {
      setUserMenuOpen(false);
    }
    if (!isClickedNavButton) {
      setMenuOpen(false);
    }
  });
  const menuHandler = () => setMenuOpen(!menuOpen);
  const userMenuHandler = () => setUserMenuOpen((userMenuOpen) => !userMenuOpen);
  return (
    <nav className={menuOpen ? "main-nav-active" : "main-nav-bar"}>
      <div className="banner">
        <Link to="/" className="text-banner">
          <IoMdSearch className="search-icon"></IoMdSearch>
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
            <img src={userImage} onClick={userMenuHandler} alt="" id="user-button" />
          </li>
        </ul>
      </div>
      <div className={userMenuOpen ? "user-menu-active" : "user-menu"} >
        <Link to="/">
          <FaUserAlt></FaUserAlt>
          Profile
        </Link>
        <Link to="/">
          <IoMdSettings></IoMdSettings>
          Settings
        </Link>
        <Link to="/">
          <IoMdLogOut></IoMdLogOut>
          Logout
        </Link>
      </div>
      <div className="menu">
        <button className="btn-menu" onClick={menuHandler} id="nav-button">
          {" "}
          <IoMdMenu></IoMdMenu>
        </button>
      </div>
    </nav>
  );
};

export default MainNavBar;
