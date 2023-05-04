
import {  Outlet } from "react-router-dom";
import MainNavBar from "./pages/components/MainNavBar";
// import Footer from "./pages/components/Footer";





const Rout= ()=>{
  return(
    <>
        <MainNavBar />
        <div>
            <Outlet />
        </div>
        {/* <Footer/> */}
    </>
  )
}


export default Rout;