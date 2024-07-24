//useRef() - similar to useState()
//It doesn't cause re-renders when its value changes. We use it when we want to "remember" some information,
//but don't want that information to trigger new renders.
//It is used for - 
    //1. Accessing/Interacting with DOM elements
    //2. Handling focus, animations, and transitions
    //3. Managing timers and intervals.


import MyComponent from "./MyComponent.jsx";

function App() {

    return (<MyComponent></MyComponent>);
}

export default App
