import "./products.scss";
import { products } from "./../../data";
import { useState } from "react";
import Tabledata from "../../components/tabledata/Tabledata";
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
    field: 'title',
    headerName: 'Title',
    width: 350,
    type: "string",
    editable: true,
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
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
    field: 'inStock',
    headerName: 'In-Stock',
    width: 150,
    type: "boolean",
    editable: true,
  },

];


const Products = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="products">
        <div className="product">
          <div className="info">
            <h1>All Products</h1>
            <button onClick={() => setOpen(true)}>Add</button>
          </div>
          <div className="table">
            <Tabledata slug={"products"} columns={columns} rows={products} />
          </div>
        </div>
        {open && <Add slug={"products"} columns={columns} setOpen={setOpen} />}
      </div>
    </>
  )
}

export default Products
