import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Nabvar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";
import "./styles/variables.scss";
import User from "./pages/singleUser/User";
import Product from "./pages/singleProduct/Product"


function App() {

  const Layout = () => {
    return (
      <div className="main">

        <Navbar />
       
        <div className="container">

          <div className="side">
            <Sidebar />
          </div> 

          <div className="content">
            <Outlet />
          </div>
        
        </div>
        
        <Footer />

      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path:"/products",
          element: <Products />
        },
        {
          path:"/users/:id",
          element: <User />
        },
        {
          path:"/products/:id",
          element: <Product />
        }
      ]
    }

  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
