import { useState } from "react";
import userImage from "../../../images/user.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = (props) => {
  const user = props.user;

  const [like, setLike] = useState(false);

  const handleLike = () => {
    console.log(
      "user whit id :",
      user.id,
      "liked the job whit  title : ",
      user.job.jobe_title,
      "?\n",
      !like
    );
    setLike(!like);
  };

  return (
    <div className="row job-box">
      <div className="sub-row">
        <div className="col user-data">
          <img src={userImage} alt="" />
          <div className="sub-col">
            <h3>{user.job.jobe_title}</h3>
            <span>
              Bost {user.first_name} {user.last_name}
            </span>
            <span>{user.job.city}</span>
          </div>
        </div>
        <div className="col date">
          <span>{user.job.date}</span>
        </div>
        <div className="col like">
          {!like ? (
            <AiOutlineHeart
              className="like-btn"
              onClick={handleLike}
            ></AiOutlineHeart>
          ) : (
            <AiFillHeart
              className="like-btn"
              onClick={handleLike}
            ></AiFillHeart>
          )}
        </div>
      </div>
      <div className="sub-row job-details">
        <span>{user.job.job_description}</span>

        <Link>Apply Now</Link>
      </div>

      <div className="sub-col key-words">
        {user.job.key_words.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </div>
    </div>
  );
};

export default Job;
