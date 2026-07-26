const Content = ({ products, setProducts, recentlyDeleted, setRecentlyDeleted }) => {
  const handleDelete = (id) => {
    const deletedProduct = products.find((product) => product.id === id);
    if (!deletedProduct) return;

    setProducts(products.filter((product) => product.id !== id));
    setRecentlyDeleted([...recentlyDeleted, deletedProduct]);
  };

  const handleUndo = (id) => {
    const restoredProduct = recentlyDeleted.find((product) => product.id === id);
    setProducts([...products, restoredProduct]);
    setRecentlyDeleted(recentlyDeleted.filter((product) => product.id !== id));
  };

  return (
    <div className="row products text-center">
      <div className="col-md-6 offset-md-3">
        <h3>Products Inventory</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <table className="table bg-white">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
              <th>Undo</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>—</td>
              </tr>
            ))}
            {recentlyDeleted.map((product, index) => (
              <tr key={product.id} style={{ opacity: 0.6 }}>
                <td>{products.length + index + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>—</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleUndo(product.id)}
                  >
                    Undo
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Content
