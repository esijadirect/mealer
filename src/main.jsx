import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from './Blogger.jsx'
import Counter from './Counter.jsx'
import Invento from './Invento.jsx'
import  { ProductProvider } from './context/ProductContext.jsx'
import Meal from './Meal.jsx'
import Store from './Store.jsx'

// import 'bootstrap/dist/css/bootstrap.min.css'

//create the context: createContext()
export const AppNameContext = createContext();

const username = 'Gentle Giant'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Meal />
    {/* <Store /> */}
    {/* <App /> */}
    {/* <Blogger /> */}
    {/* <Counter /> */}
    {/* <ProductProvider>

    <AppNameContext.Provider value={{ appName: "Invento App"}}>
      <Invento />
    </AppNameContext.Provider>

    </ProductProvider> */}
  </StrictMode>,

  //rules ofJSX:
  //1. Anything you're rendring must be wrapped in a single parent element.
  //2. to display a javascript variable, you must wrap it in curly braces.
  //3. To display a javascript expression, you must wrap it in curly braces.
  
  // <>
  
  // <h1> Hello Guys</h1>

  // <p> Welcome to our React app! I am {username} {2000 + 6}</p>


  // </>

)


//the issue with prop drilling is that it can make your code harder to read and maintain, especially if you have a deep component tree. It can also lead to performance issues if you're passing down a lot of props through multiple levels of components.
//state manager (context api) redux, recoil, zustand, jotai, mobx, xstate, react-query, react-redux, react-context-api
//context is a way to share state across multiple components without having to pass props down through every level of the component tree. It allows you to create a global state that can be accessed by any component in your application, regardless of its position in the component hierarchy. This can help reduce prop drilling and make your code more maintainable.

//concontext api is divided into two parts: the provider and the consumer. The provider is a component that holds the state and provides it to its child components, while the consumer is a component that consumes the state provided by the provider. The provider can be placed at any level of the component tree, and all child components can access the state provided by the provider.

//using context api
//create a context : createContext() function is used to create a context object. This object contains a Provider component and a Consumer component. The Provider component is used to provide the state to its child components, while the Consumer component is used to consume the state provided by the Provider.
//create a provider: a provider is a super component that holds the state and provides it to its child components. It is created using the Provider component of the context object. The provider can be placed at any level of the component tree, and all child components can access the state provided by the provider.
//create a consumer: a consumer is a component that consumes the state provided by the provider. It is created using the Consumer component of the context object. The consumer can be placed at any level of the component tree, and it can access the state provided by the provider.
//wrap a provider around all the children components that need access to the state
//go inside the children components and use the useContext() hook to access the state provided by the provider. The useContext() hook takes the context object as an argument and returns the current value of the context. This allows you to access the state provided by the provider without having to pass props down through every level of the component tree.

//in the src folder, create a folder called context and inside it, create a file called ProductContext.jsx. In this file, we will create the context and export it so that we can use it in other components.