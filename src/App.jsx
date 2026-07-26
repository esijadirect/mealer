//import css file
import"./css/styles.css"

// import components
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  //meaning of props: props are a way to pass data from a parent component to a child component in React. In this case, the App component is the parent component, and it is passing the pageVisits data down to its child components (Header, Hero, Main, and Footer) as props. This allows the child components to access and use the pageVisits data without having to manage their own state or fetch the data themselves.
  //how can a parent send props to children components: In React, a parent component can send props to its child components by passing them as attributes when rendering the child component. For example, in the App component, we can pass the pageVisits data to the Header component like this: <Header pageVisits={pageVisits} />. Then, in the Header component, we can access the pageVisits data using props.pageVisits.
  //how can a child receive props and use it: In React, a child component can receive props from its parent component by defining a parameter in its function signature. For example, in the Header component, we can define a parameter called props like this: function Header(props) { ... }. Then, we can access the pageVisits data using props.pageVisits. We can also use destructuring to extract the pageVisits data directly from the props object like this: function Header({ pageVisits }) { ... }.
  //rules of props: 
  // 1. Props are read-only, meaning that a child component cannot modify the props it receives from its parent component. 
  // 2. Props can be any data type, including strings, numbers, objects, arrays, and functions. 
  // 3. Props can be passed down multiple levels of components, allowing for complex data structures to be shared across an application. 
  // 4. Props can be used to customize the behavior and appearance of child components based on the data they receive from their parent component.  
  
  // sometimes this component gets a piece of data from a backend server, and then it passes that data down to its children components as props. This is called "lifting state up" in React.
  
  const pageVisits = 1000; //this comes from aothe application or backend server, and we are passing it down to the children components as props.
  const categories = ['Appetizers', 'Main Course', 'Desserts', 'Beverages']; //this comes from a backend server, and we are passing it down to the children components as props to Hero Section
  
  //assuming we receive an array of an object from a backend server, we can pass that data down to the children components as props. For example, we can receive an array of products from a backend server, and then we can pass that data down to the Main component as props. The Main component can then use that data to display a list of products on the page.
  const products =[
    {
      id: 1,
      name: 'Pizza',
      price: 13000,
      image: 'pizza.jpg'
    },
    {
      id: 2,
      name: 'Burger',
      price: 8000,
      image: 'pizza.jpg'
    },
    {
      id: 3,
      name: 'Pasta',
      price: 10000,
      image: 'pizza.jpg'
    },
  ]

  //prop drilling: Prop drilling is a term used in React to describe the process of passing data from a parent component down to its child components through multiple levels of nested components. This can become cumbersome and difficult to manage as the number of nested components increases, especially if the data needs to be passed down through many levels of components that don't actually need to use the data themselves. In such cases, it may be better to use a state management library like Redux or Context API to manage the state and avoid prop drilling.

  //a child cannot change the props it receives from its parent component. If a child component needs to change its own state, it can use the useState hook to manage its own state internally. However, if a child component needs to communicate with its parent component or update the parent's state, it can do so by calling a function that is passed down as a prop from the parent component. This is called "lifting state up" in React.
  




  return (
    <>
      <Header disp = {pageVisits} />
      <Hero  cats = {categories} />
      <Main products = {products} />
      <Footer disp = {pageVisits} products = {products} />  
    
    </>

  )


}
export default App