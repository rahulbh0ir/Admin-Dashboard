import { Link } from "react-router-dom"
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">

        <div className="item">
          <span className="title">MAIN</span>
          <Link to="/">
            <img src="home.svg"  alt=""/>
            <span className="listTitle">Homepage</span>
          </Link>
          <Link to="/">
            <img src="profile.svg"  alt=""/>
            <span className="listTitle">Profile</span>
          </Link>
        </div>
        <div className="item">
          <span className="title">MAIN</span>
          <Link to="/">
            <img src="home.svg"  alt=""/>
            <span className="listTitle">Homepage</span>
          </Link>
          <Link to="/">
            <img src="profile.svg"  alt=""/>
            <span className="listTitle">Profile</span>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Sidebar
