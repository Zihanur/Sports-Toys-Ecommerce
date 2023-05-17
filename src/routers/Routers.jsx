import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main";
import Home from "../components/Home/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
    ]
  },
]);

export default router;