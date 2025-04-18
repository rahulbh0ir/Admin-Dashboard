import Tabledata from "../../components/tabledata/Tabledata";
import "./users.scss"
import { userRows } from "./../../data"
import { useState } from "react";
import Add from "../../components/add/Add";

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90
  },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img src={params.row.img || "./noavatar.png"} alt="" />
      )
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: "string",
    width: 250,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: "boolean",
    editable: true,
  },

];



const Users = () => {
  
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div className="users">
        <div className="info">
          <h1>Add New Users</h1>
          <button onClick={() => setOpen(true)}>Add</button>
        </div>
        <div className="table">
          <Tabledata slug={"users"} columns={columns} rows={userRows} />
        </div>
      </div>
      {open && <Add slug= {"users"} columns= {columns} setOpen= {setOpen} />}
    </>
  )
}

export default Users
