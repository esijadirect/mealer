import React from 'react'
// import images
import image1 from '../assets/apple.jpg'
import image2 from '../assets/pizza.jpg'

const products = [
    { id: 1, name: 'Apple', price: 500, image: image1 },
    { id: 2, name: 'Pizza', price: 19000, image: image2 },
]

function Products() {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th width="35%">Product Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="img-fluid"
                                        style={{ maxWidth: '50%' }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products