import Select from "../components/Select";
import { useEffect, useRef, useState } from "react";
// import usersData from "../../users.json";
// import job from "../../jobs1.json";
import cities from "../../data/cities.json";
import domain from "../../data/dmains.json";
import education from "../../data/education.json";
import Job from "../components/Home/Job";
import Pagination from "../components/Home/Pagination";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import axios from "axios";
import { motion, useAnimation, useInView } from "framer-motion";

const Home = () => {
  document.title = 'Home';
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLenght, setSearchLenght] = useState(0);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCities, setSelectedCities] = useState("");
  const [selectedDomains, setSelectedDomains] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");
  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(false);
  const ref = useRef(null);
  const target = useInView(ref, { once: true });
  const animate = useAnimation();
  const transition = {
    duration: 0.5,
    delay: 0.1,
  };
  useEffect(() => {
    if (target) {
      animate.start("end");
    }
  }, [target, animate]);

  const options = [
    { label: "New", value: "New" },
    { label: "Old", value: "Old" },
  ];

  // get select from Select componenets
  const handleSelectChange = (value) => {
    setSelectedOption(value);
    setSearchQuery("");
  };
  const handleSelectChangeCities = (value) => {
    setSelectedCities(value);
    console.log(`The selected city is : ${selectedCities}`);
  };

  const handleSelectChangeDomain = (value) => {
    setSelectedDomains(value);
    console.log(`The selected Domain is : ${selectedDomains}`);
  };
  const handleSelectChangeEducation = (value) => {
    setSelectedEducation(value);
    console.log(`The selected education is : ${selectedEducation}`);
  };

  // scroll button

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.body.scrollHeight;
      setShowTopButton(!isBottom);
      const isTop = window.scrollY === 0;
      setShowBottomButton(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // fetch data
  useEffect(() => {

    axios
      .get("http://localhost:8000/api/jobs/")
      .then((response) => {
        const fiterJobs = response.data.slice(0, 200);
        setJobs(fiterJobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // merge jobs and users,when we use api we need relationship in db cascade users and jobs

  const mergedData = jobs

  // Pagination load 10 rows in one page stile needs some fixing
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = mergedData.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // change page and data
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  // search in whit title and discriptioin

  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    let filteredJobs = mergedData.filter(
      (job) =>
        job.jobe_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.job_description
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    );
    if (selectedOption === "New") {
      filteredJobs = filteredJobs.filter((job) => {
        const jobDate = job.created_date;
        const [jobMonth, jobDay, jobYear] = jobDate
          .split("/")
          .map((str) => parseInt(str));
        const jobDateObject = new Date(jobYear, jobMonth - 1, jobDay);
        const today = new Date();
        const newDay = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );
        return newDay === jobDateObject;
      });
    } else if (selectedOption === "Old") {
      filteredJobs = filteredJobs.filter((job) => {
        const jobDate = job.created_date.split("/");
        const today = new Date();
        const newDate = new Date(jobDate[2], jobDate[0] - 1, jobDate[1]);
        return newDate < today;
      });
    }
    setFilteredJobs(filteredJobs);
  };

  // if search query not empty push filteredJobs else push currentJobs

  const displayJobs = searchQuery ? filteredJobs : currentJobs;

  // handling the job search lenght

  useEffect(() => {
    setSearchLenght(displayJobs.length);
  }, [displayJobs.length]);
  return (
    <div className="home container">
      <div className="scroll-bottom">
        <button
          onClick={scrollToBottom}
          style={{ display: showTopButton ? "block" : "none" }}
        >
          <IoIosArrowDropdownCircle className="scroll-icon"></IoIosArrowDropdownCircle>
        </button>
      </div>
      <motion.div
        className="left"
        ref={ref}
        variants={{
          start: {
            opacity: 0,
            scale: 0.8,
            x: 100,
          },
          end: {
            opacity: 1,
            scale: 1,
            x: 0,
          },
        }}
        initial="start"
        animate={animate}
        transition={transition}
      >
        <h1>Filter</h1>
        <div className="row">
          <div className="sub-row">
            <div className="col">
              <h4>Cities</h4>
              <Select
                options={cities}
                defaultValue="Select"
                onChange={handleSelectChangeCities}
              />
            </div>
            <div className="col">
              <h4>Domain</h4>
              <Select
                options={domain}
                defaultValue="Select"
                onChange={handleSelectChangeDomain}
              />
            </div>

            <div className="col">
              <h4>Educations</h4>
              <Select
                options={education}
                defaultValue="Select"
                onChange={handleSelectChangeEducation}
              />
            </div>
            <div className="col sub-row search-box">
              <div className="form">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="right"
        ref={ref}
        variants={{
          start: {
            opacity: 0,
            scale: 0.8,
            x: 100,
          },
          end: {
            opacity: 1,
            scale: 1,
            x: 0,
          },
        }}
        initial="start"
        animate={animate}
        transition={transition}
      >
        <div className="row search-row">
          <div className="col search">
            <h1>Search</h1>
          </div>
          <div className="col search-box">
            <div className="form">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
              />
              <div style={{ display: "none" }}>
                <Select
                  options={options}
                  defaultValue="Select"
                  onChange={handleSelectChange}
                />
              </div>
            </div>
          </div>
          <div className="col job-result">
            {searchQuery === "" ? (
              <h4>Search For Job</h4>
            ) : (
              <h4>{searchLenght} jobs has been found</h4>
            )}
          </div>
        </div>
        {displayJobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        {searchQuery === "" ? (
          <div className="row pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleClick={handleClick}
            />
          </div>
        ) : (
          <></>
        )}
      </motion.div>
      <div
        className="scroll-top"
        style={{ display: showBottomButton ? "block" : "none" }}
      >
        <button onClick={scrollToTop}>
          <IoIosArrowDropupCircle className="scroll-icon"></IoIosArrowDropupCircle>
        </button>
      </div>
    </div>
  );
};

export default Home;
