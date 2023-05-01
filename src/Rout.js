
import {  Outlet } from "react-router-dom";
import MainNavBar from "./pages/components/MainNavBar";





const Rout= ()=>{
  return(
    <>
        <MainNavBar />
        <div>
            <Outlet />
        </div>
    </>
  )
}


export default Rout;