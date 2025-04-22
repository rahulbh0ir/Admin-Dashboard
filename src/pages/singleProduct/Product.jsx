import Single from "../../components/single/Single";
import "./product.scss";
import { singleProduct } from "./../../data"

const Product = () => {
  return (
    <div className="product">
      <Single single ={singleProduct }/>
    </div>
  )
}

export default Product
