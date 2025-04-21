import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Nabvar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";
import "./styles/variables.scss";


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
          path:"/Admin-Dashboard",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path:"/products",
          element: <Products />
        }
      ]
    }

  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
