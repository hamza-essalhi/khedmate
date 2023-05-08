import { useEffect, useState } from "react";
import userImage from "../../../images/user.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = (props) => {
  const user = props.user;
  const [like, setLike] = useState(false);

  useEffect(() => {
    try {
      const likedJobs = JSON.parse(localStorage.getItem("likedJobs")) || [];
      const liked = likedJobs.filter((job) => job.id === parseInt(user.job.id));
      setLike(liked[0].liked);
    } catch {
      setLike(false);
    }
  }, [user.job?.id]);
  const handleLike = () => {
    setLike(!like);
    const likedJobs = JSON.parse(localStorage.getItem("likedJobs")) || [];
    const index = likedJobs.findIndex((j) => j.id === user.job?.id);

    if (index !== -1) {
      likedJobs[index].liked = !likedJobs[index].liked;
    } else {
      likedJobs.push({ id: user.job?.id, liked: like });
    }

    localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
  };

  return (
    <div className="row job-box">
      <div className="sub-row">
        <div className="col user-data">
          <img src={userImage} alt="" />
          <div className="sub-col">
            <h3>{user.job?.jobe_title}</h3>
            <span>
              Bost {user.first_name} {user.last_name}
            </span>
            <span>{user.job?.city}</span>
          </div>
        </div>
        <div className="col date">
          <span>{user.job?.date}</span>
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
        <span>{user.job?.job_description.slice(0,200)}</span>

        <Link to={'job/'+user.job?.id}>Apply Now</Link>
      </div>

      <div className="sub-col key-words">
        <h3>Keywords</h3>
        <div className="keywords-row">
        {user.job?.key_words.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
