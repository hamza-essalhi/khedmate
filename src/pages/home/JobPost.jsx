import { useEffect, useState } from "react";
import jobImage from "../../images/user.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const JobPost = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [job, setJob] = useState([]);
  const [jobPost, setJobPost] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios
    .get("http://localhost:3000/job-post.json")
    .then((response) => {
      const jobPosts = response.data;
      const filteredJobPost = jobPosts.filter((jobPost) => jobPost.id === parseInt(id));
      setJobPost(filteredJobPost[0]);
    })
    .catch((error) => {
      console.log(error);
    });
    axios
      .get("http://localhost:3000/users.json")
      .then((response) => {
        const users = response.data;
        const filteredUser = users.filter((user) => user.id === parseInt(id));
        setUser(filteredUser[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3000/jobs1.json")
      .then((response) => {
        const jobs = response.data;
        const filteredJob = jobs.filter((job) => job.id === parseInt(id));
        setJob(filteredJob[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  useEffect(() => {
    try {
      const likedJobs = JSON.parse(localStorage.getItem("likedJobs")) || [];
      const liked = likedJobs.filter((job) => job.id === parseInt(id));
      setLike(liked[0].liked);
    } catch {
      setLike(false);
    }
  }, [id]);
  const handleLike = () => {
    setLike(!like);
    const likedJobs = JSON.parse(localStorage.getItem("likedJobs")) || [];
    const index = likedJobs.findIndex((j) => j.id === job.id);

    if (index !== -1) {
      likedJobs[index].liked = !likedJobs[index].liked;
    } else {
      likedJobs.push({ id: job.id, liked: like });
    }

    localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
  };

  return (
    <div className="job-post">
      <div className="sub-row">
        <div className="col job-data">
          <img src={jobImage} alt="" />
        </div>
        <div className="col date">
          <h3>{job.jobe_title}</h3>
          <div className="sub-row">
            <span>
              Post By: {user.first_name} {user.last_name}
            </span>
            <span>City: {job.city}</span>
            <span>Published on: {job.date}</span>
          </div>
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
      <div className=" job-details">
        <span>{job.job_description}</span>
        <div className="sub-row">
            <span>
            Domain: {jobPost.domain?.slice(0, 10)}
            </span>
            <span>Experience: {parseInt(jobPost.experience)} Years</span>
            <span>Fonction: {job.domain}</span>
          </div>
          <div className="sub-row">
            <span>
            Contract: CDI
            </span>
            <span>Type: {jobPost.type}</span>
            <span>Company: {jobPost.company}</span>
          </div>
          <div className="sub-row">
            <span>
            Salaire: {jobPost.salaire} DH
            </span>
            <span>Formation: {jobPost.formation} mounths</span>
            <span>Education level: {jobPost.education}</span>
          </div>
        <Link>Apply Now</Link>
      </div>

      <div className="sub-col key-words">
        <h3>keywords:</h3>
        <div className="col-key-words">
            {job.key_words?.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
        </div>
      </div>
    </div>
  );
};

export default JobPost;
