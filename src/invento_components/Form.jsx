import { useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext.jsx'

const Form = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [formData, setFormData] = useState({ name: '', quantity: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name.trim() === '' || formData.quantity === '') {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    const newProduct = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: formData.name,
      quantity: parseInt(formData.quantity)
    };

    setProducts([...products, newProduct]);
    setFormData({ name: '', quantity: '' });
  };

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        {showAlert && (
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oops!</strong> Please provide both product name and quantity.
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="py-3 px-5 brr">
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                placeholder="product name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder=" Qty"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 text-end">
              <input type="submit" value="Add Product" className="btn btn-primary mine" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
