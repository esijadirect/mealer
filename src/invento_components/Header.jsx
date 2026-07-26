import {useContext} from 'react' //hook for consuming a context
import { ProductContext } from '../context/ProductContext.jsx' //the particular context we want to consume

const Header = () => {
  const { products } = useContext(ProductContext); //from inside product context

  return (
    <div className="row header">
      <div className="col text-center">
        <h1 className="mb-3">Product Inventory</h1>
        <button type="button" className="btn btn-primary">
          Count <span className="badge bg-danger">{products.length}</span>
        </button>
      </div>
    </div>
  )
}

export default Header
