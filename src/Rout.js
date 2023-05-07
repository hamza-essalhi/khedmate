import { Outlet } from "react-router-dom";
import MainNavBar from "./pages/components/MainNavBar";
// import Footer from "./pages/components/Footer";

const Rout = () => {
  return (
    <>
      {/* navbar */}
      <MainNavBar />
      {/* content */}
      <Outlet />

      {/* <Footer/> */}
    </>
  );
};

export default Rout;
