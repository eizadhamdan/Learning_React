//updater function - A function passed as an argument to setState() **usually**
//example - setYear(arrow function)
//It allows for safe updates based on the previous state and they're typically used with 
//mulptile state updates and asynchronous functions.

import React, { useState } from 'react';

function MyComponent() {
    
    const [count, setCount] = useState(0);

    function increment() {

        //here we use the current state to calculate the next state.
        //set functions do not trigger an update.
        //React batches together state updates for performance reasons.
        //next state becomes the current state after an update
        // setCount(count + 1);


        //the state is updated three separate times
        //here it takes the pending state to calculate the next state.
        //React puts our updater function in a queue and during the next render, it'll call them in the same order.
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );

}

export default MyComponent
