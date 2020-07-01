import React from "react";
import "./viewDetails.css";

export default ({id, name, gender, birth_year, eye_color}) => {
    return (
        <>
            <img
                alt={"Person"}
                className="person-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

            <div className="card-body">

                <h4>{name}</h4>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">{"Gender"}</span>

                        <span>{gender}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">{"Birth Year"}</span>

                        <span>{birth_year}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">{"Eye Color"}</span>

                        <span>{eye_color}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}