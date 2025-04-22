import { Link } from "react-router-dom";
import "./sidebar.scss";
import { menu } from "../../data.js"

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">

        {menu.map(item =>  

        <div className="item" key={item.id} >
          <span className="title">{item.title}</span>

          {item.listItems.map(itemlist => 

          <Link to={itemlist.url} className="lists" key={itemlist.id}>
            <img src={itemlist.icon}  alt=""/>
            <span className="listTitle">{itemlist.title}</span>
          </Link>
            
          )}
          
        </div>

        )}

      </div>
    </>
  )
}

export default Sidebar
