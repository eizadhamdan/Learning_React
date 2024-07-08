import profilePic from "./assets/robot.jpg"

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Eizad Hamdan</h2>
            <p className="card-text">A Computer Engineering undergraduate.</p>
        </div>
    );
}

export default Card