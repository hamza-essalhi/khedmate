import { FaSearch } from "react-icons/fa";

import Select from "../components/Select";
import { useEffect, useState } from "react";
import usersData from "../../users.json";
import job from "../../jobs.json";
import Job from "../components/Home/Job";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const options = [
    { label: "New", value: "New" },
    { label: "Old", value: "Old" },
  ];
  const handleSelectChange = (value) => {
    console.log("Selected option value:", value);
  };

  useEffect(() => {
    const firstTenUsers = usersData.slice(0, 100);
    setUsers(firstTenUsers);
    setJobs(job.slice(0, 100))
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? "active" : ""}>
          <a onClick={() => handleClick(i)} href="#">
            {i}
          </a>
        </li>
      );
    }
    return <ul>{pageNumbers}</ul>;
  };

  return (
    <div className="home container">
      <div className="left"></div>
      <div className="right">
        <div className="row">
          <div className="col search">
            <h1>Search</h1>

            <Select
              options={options}
              defaultValue="Select"
              onChange={handleSelectChange}
            />
          </div>
          <div className="col search-box">
            <form action="">
              <input type="search" name="" id="" placeholder="Search" />
              <button>
                <FaSearch></FaSearch>
              </button>
            </form>
          </div>
          <div className="col job-result">
            <h4>20 jobs has been found</h4>
          </div>
        </div>
        {currentUsers.map(user => {
          const job = jobs.find(job => job.id === user.id);
          return <Job key={user.id} user={user} job={job} />
        })}
        <div className="row">
        {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default Home;
