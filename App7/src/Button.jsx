
function Button(){

    // const handleClick = () => console.log("Click detected!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking the button!`);

    // return(<button onClick={() => handleClick("Dude")}>Click here</button>);


    //----------------------------------------------------------------------------------------//

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count++;
    //         console.log(`${name} you clicked the button ${count} times`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking the button!`);
    //     }
    // };

    // return(<button onClick={() => handleClick("Dude")}>Click me</button>)

    //----------------------------------------------------------------------------------------//

    const handleClick = (e) => e.target.textContent = "OUCH!!";              //e-event object

    return(<button onDoubleClick={(e) => handleClick(e)}>Click here</button>);

}

export default Button