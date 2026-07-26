import Header from './invento_components/Header.jsx'
import Form from './invento_components/Form.jsx'
import Content from './invento_components/Content.jsx'
import Footer from './invento_components/Footer.jsx'
import './assets/app.css'
import {useState} from 'react'

const Invento = () => { 
  const [products, setProducts] = useState([
    { 
        id: 1, 
        name: 'Black Marker', 
        quantity: 10 
    },
    { 
        id: 2, 
        name: 'Display Material', 
        quantity: 20 
    },
    { 
        id: 3, 
        name: 'Flower Pots', 
        quantity: 5 
    }
  ]);

  const [recentlyDeleted, setRecentlyDeleted] = useState([]);

  return (
    <>
      <Header  />
      <Form />
      <Content products={products} setProducts={setProducts} recentlyDeleted={recentlyDeleted} setRecentlyDeleted={setRecentlyDeleted} />
      <Footer />
    </>
  )
}

export default Invento

