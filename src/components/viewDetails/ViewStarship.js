import React from "react";
import "./viewDetails.css";

export default ({id, name, model, costInCredits, passengers}) => {
    return (
        <>
            <img
                alt={"Starship"}
                className="person-image"
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />

            <div className="card-body">

                <h4>{name}</h4>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">{"Model"}</span>

                        <span>{model}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">{"Cost in Credits"}</span>

                        <span>{costInCredits}{" crds"}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">{"Quantity of passengers"}</span>

                        <span>{passengers}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
