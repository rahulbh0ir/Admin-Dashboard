import "./add.scss"

const Add = (props) => {

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("Submit")
  }

  return (
    <div className="add">
      <div className="container">
        <span onClick={() => props.setOpen(false)} style={{ cursor: "pointer" }}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSumit}>
          {props.columns.filter(item => item.field !== "id" && item.field !== "avatar").map((item) =>
          (
            <div className="item">
              <label>{item.headerName}</label>
              <input placeholder={item.headerName}></input>
            </div>
          )
          )}
          <button>Send</button>
        </form>

      </div>
    </div>
  )
}

export default Add
