
import { useState } from "react";
import userImage from "../../../images/user.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = (props) => {
    const user= props.user
    const [like,setLike]=useState(false)
    const handleLike=()=>setLike(!like)
    return ( 
        <div className="row job-box">
          <div className="sub-row">
            <div className="col user-data">
              <img src={userImage} alt="" />
              <div className="sub-col">
                <h2>An Automotive Customer </h2>
                <span>Bost {user.first_name} {user.last_name}</span>
                <span>Casablanca</span>
              </div>
            </div>
            <div className="col date">
              <span>Now at 12 : 12 AM</span>
            </div>
            <div className="col like">
              {like ? (<AiOutlineHeart className="like-btn" onClick={handleLike}></AiOutlineHeart>):<AiFillHeart className="like-btn" onClick={handleLike}></AiFillHeart>}
            </div>
          </div>
          <div className="sub-row">
            <div className="col">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
            <div className="col">
              <Link>Apply Now</Link>
            </div>
          </div>
          <div className="sub-col">
            <span>Customer service</span>
            <span>Advisor</span>
            <span>Customer service</span>
            <span>Advisor</span>
            <span>Customer service</span>
            <span>Advisor</span>
          </div>
        </div>
     );
}
 
export default Job;