<<<<<<< HEAD
import {  Outlet } from "react-router-dom";
import MainNavBar from "./pages/component/MainNavBar";
=======
import { Link, Outlet } from "react-router-dom";
>>>>>>> a153cf3 (Adding React Base Template)



const Rout= ()=>{
  return(
    <>
<<<<<<< HEAD
        <MainNavBar />
=======
        <div>
            <Link to='/'>
                home
            </Link>
            <Link to='/error'>
                error
            </Link>

        </div>
>>>>>>> a153cf3 (Adding React Base Template)
        <div>
            <Outlet />
        </div>
    </>
  )
}


export default Rout;