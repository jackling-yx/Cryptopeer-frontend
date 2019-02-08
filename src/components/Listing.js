import React from 'react'
import '../App.css';


const Listing = () => {
    return(
        <div className="card">
            <img className="card-profile-picture" src="/images/Blank-Profile-Picture.jpg" alt="Avatar" ></img>
                <div className="card-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
        </div>
    )
}

export default Listing