import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Rout from "./Rout";

//pages
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import JobPost from "./pages/home/JobPost";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rout />}>
        <Route index element={<Home />} />
        <Route path="/job/:id" element={<JobPost />} />
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
