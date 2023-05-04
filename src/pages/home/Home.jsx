import { FaSearch } from "react-icons/fa";

import Select from "../components/Select";
import { useEffect, useState } from "react";
import usersData from '../../users.json';
import Job from "../components/Home/Job";

const Home = () => {

  
  const [users, setUsers] = useState([]);
  const options = [
    { label: 'New', value: 'New' },
    { label: 'Old', value: 'Old' },
    
  ];
  const handleSelectChange = (value) => {
    console.log('Selected option value:', value);
  };

  
 
  useEffect(() => {
    const firstTenUsers = usersData.slice(0, 10);
        setUsers(firstTenUsers);
  }, []);

  return (
    <div className="home container">
      <div className="left"></div>
      <div className="right">
        <div className="row">
          <div className="col search">
            <h1>Search</h1>
      
            <Select options={options} defaultValue="Select" onChange={handleSelectChange}/>

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
        {users.map(user => (
        <Job key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
