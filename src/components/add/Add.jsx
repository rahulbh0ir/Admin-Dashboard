import "./add.scss"

const Add = (props) => {

  const handleSumit = () => {
    console.log("Submit")
  }

  return (
    <div className="add">
      <div className="container">
        <span onClick={() => props.setOpen(false)} style={{ cursor: "pointer" }}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSumit}>
          {props.columns.map((item) => (
            <div className="item">
              <label>{item.headerName}</label>
              <input></input>

            </div>
          ))}
        </form>
        
      </div>
    </div>
  )
}

export default Add
