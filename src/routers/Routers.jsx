import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main";
import Home from "../components/Home/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import MyToys from "../components/MyToys/MyToys";
import AddAToy from "../components/AddAToy/AddAToy";
import ToyDetails from "../components/Home/ToyDetails/ToyDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Toy from "../components/AllToys/Toy/Toy";
import ToyDescription from "../components/AllToys/ToyDescription/ToyDescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/alltoys"),
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRouter>
            <ToyDescription></ToyDescription>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alltoys/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRouter>
            <MyToys></MyToys>
          </PrivateRouter>
        ),
        loader:()=>fetch('http://localhost:5000/mytoys')
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRouter>
            <AddAToy></AddAToy>
          </PrivateRouter>
        ),
      },
      {
        path: "/toydetails",
        element: (
          <PrivateRouter>
            <ToyDetails></ToyDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/toy",
        element: <Toy></Toy>,
      },
    ],
  },
]);

export default router;
