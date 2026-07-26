import Nav from './meal_components/Nav'
import Hero from './meal_components/Hero'
import Footer from './meal_components/Footer'
import Category from './meal_components/Category'

import{useState, useEffect} from 'react'

const Meal = () => {

    //to send requestto the APIand get data, we need 3 states: 1. loading, 2. data, 3. error
    // a state to track the loading state of the API request
    // a state to store the data returned from the API
    // a state to track any errors that may occur during the API request

    const[categories, setCategories] = useState([]);
    const[error, setError] = useState(false);
    const[loading, setLoading] = useState(true);

    //a function to contain fetching logic and update the states accordingly
    function fetch_meal(){
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(function(response){ return response.json() })
        .then(function(data){
            setCategories(data.categories);
            setError(false);
            setLoading(false);
        })
        .catch(function(error){
            setCategories([]);
            setError(true);
            setLoading(false);
        });
    }


//to communicate with the API we use useEffect hook

    useEffect(function(){
        fetch_meal();
    }, []); //the empty array means that the effect will only run once, when the component is first rendered



  return (
    <>
      <Nav />
      <Hero />
      <Category categories={categories} loading={loading} error={error} />
      <Footer />
    </>
  );
};

export default Meal;