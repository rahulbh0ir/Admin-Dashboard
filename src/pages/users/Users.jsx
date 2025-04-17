import Tabledata from "../../components/tabledata/Tabledata";
import "./users.scss"
import * as React from 'react';


const Users = () => {
  return (
    <>
      <div className="users">
        <div className="info">
          <h1>Add New Users</h1>
          <button>Add</button>
        </div>
        <div className="table">
         <Tabledata />
        </div>
      </div>

    </>
  )
}

export default Users
