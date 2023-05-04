import Select from "../components/Select";
import { useEffect, useState } from "react";
import usersData from "../../users.json";
import job from "../../jobs1.json";
import Job from "../components/Home/Job";
import Pagination from "../components/Home/Pagination";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLenght, setSearchLenght] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { label: "New", value: "New" },
    { label: "Old", value: "Old" },
  ];
  const handleSelectChange = (value) => {
    setSelectedOption(value)
  };
  

  useEffect(() => {
    const firstTenUsers = usersData.slice(0, 200);
    setUsers(firstTenUsers);
    setJobs(job.slice(0, 200));
  }, []);
  const mergedData = users.map((user) => {
    const job = jobs.find((j) => j.id === user.id);
    return { ...user, job };
  });
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = mergedData.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    
    setSearchQuery(query);
    let filteredUsers = mergedData.filter(
      (user) =>
        user.job.jobe_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.job.job_description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (selectedOption === "New") {
      filteredUsers = filteredUsers.filter(
        (user) => {
          const jobDate = user.job.date;
          const [jobMonth, jobDay, jobYear] = jobDate.split('/').map(str => parseInt(str));
          const jobDateObject = new Date(jobYear, jobMonth - 1, jobDay);
          const today = new Date();
          const newDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
          return newDay === jobDateObject;
          
        }
      );
    } else if (selectedOption === "Old") {
      filteredUsers = filteredUsers.filter(
        (user) => {
          const jobDate = user.job.date.split("/");
          const today = new Date();
          const newDate = new Date(jobDate[2], jobDate[0] - 1, jobDate[1]);
          return newDate < today;
          
        }
      );
    }
    setFilteredUsers(filteredUsers);
  }

  const displayUsers = searchQuery ? filteredUsers : currentUsers;
  useEffect(() => {
    setSearchLenght(displayUsers.length);
  }, [displayUsers.length]);
  return (
    <div className="home container">
      <div className="scroll-bottom">
      <button onClick={scrollToBottom}><IoIosArrowDropdownCircle></IoIosArrowDropdownCircle></button>
      </div>
      <div className="left">
        <h1>left</h1>
      </div>
      <div className="right">
        <div className="row">
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
              <Select
                options={options}
                defaultValue="Select"
                onChange={handleSelectChange}
              />
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
        {displayUsers.map((user) => {
          
          return <Job key={user.id} user={user} />;
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
      </div>
      <div className="scroll-top">
      <button onClick={scrollToTop}><IoIosArrowDropupCircle></IoIosArrowDropupCircle></button>
      </div>
    </div>
  );
};

export default Home;
