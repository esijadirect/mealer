

import { createContext, useState } from "react";

//create the context
const ProductContext = createContext();


//create the provider
const ProductProvider = ({ children }) => {

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

          // a function that accepts a new product details and insert it into product array

          //create a function that accepts a product id and delecte the product with that id from inside the product state
          //a function that accept product id and details and update the product with that id inside the product state

    return (
        <ProductContext.Provider value={{ products, setProducts }}>

            {children}
            
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductProvider };


//note whenever you are using hooks, it should be imported from react. Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class component. Some of the most commonly used hooks are useState, useEffect, useContext, useReducer, and useRef.