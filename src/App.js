import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Rout from "./Rout";

//pages
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rout />}>
        <Route index element={<Home />} />
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
