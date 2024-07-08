
function Food() {

    const food1 = "Orange";
    const food2 = "Apple";


    return(
        <ul>
            <li>Mango</li>
            <li>{food1.toLowerCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food