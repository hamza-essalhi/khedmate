import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Rout from "./Rout";

//pages
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import JobPost from "./pages/home/JobPost";
import AboutUs from "./pages/home/AboutUs";
import ContactUs from "./pages/home/ContactUs";
import Login from "./pages/home/Login";
import SignUp from "./pages/home/SignUp";
import User from "./pages/admin/User";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rout />}>
        {/* home */}
        <Route index element={<Home />} />
        <Route path="/job/:id" element={<JobPost />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} />

        {/* user */}
        <Route path="/user/:id" element={<User/>} />

        {/* error */}
        <Route path="/error" element={<Error />} />
      </Route>
    )

  )
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}



export default App;
