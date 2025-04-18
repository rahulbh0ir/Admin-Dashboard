import "./add.scss"

const Add = (props) => {

  const handleSumit = () => {

  }

  return (
    <div className="add">
      <div className="container">
        <div className="close" onClick={() => props.setOpen(false)} style={{ cursor: "pointer" }}>X</div>
        <div className="info">
          <form action={handleSumit}>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add
