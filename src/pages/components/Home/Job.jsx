
import { useState } from "react";
import userImage from "../../../images/user.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = (props) => {
    const user= props.user
    const job = props.job
    const [like,setLike]=useState(false)
    const handleLike=()=>setLike(!like)
    
    return ( 
        <div className="row job-box">
          <div className="sub-row">
            <div className="col user-data">
              <img src={userImage} alt="" />
              <div className="sub-col">
                <h2>{job.jobe_title}</h2>
                <span>Bost {user.first_name} {user.last_name}</span>
                <span>{job.city}</span>
              </div>
            </div>
            <div className="col date">
              <span>{job.date}</span>
            </div>
            <div className="col like">
              {like ? (<AiOutlineHeart className="like-btn" onClick={handleLike}></AiOutlineHeart>):<AiFillHeart className="like-btn" onClick={handleLike}></AiFillHeart>}
            </div>
          </div>
          <div className="sub-row">
            <div className="col">
              <span>
                {job.job_description}
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