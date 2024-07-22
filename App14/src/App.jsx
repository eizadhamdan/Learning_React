// useEffect() - React hook that tells react to execute some piece of code when :
// this component re-renders, this component mounts, the state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})             //runs after every re-render
// 2. useEffect(() => {}, [])         //runs only on mount
// 3. useEffect(() => {}, [value])    //runs on mount + when value changes

//Uses- 
//    Event Listeners, DOM manipulation, Subscriptions(real-time updates), Fetching data from API, Clean up when a component unmounts


import MyComponent from "./MyComponent.jsx";
function App() {
  
  return(<MyComponent />);
}

export default App
