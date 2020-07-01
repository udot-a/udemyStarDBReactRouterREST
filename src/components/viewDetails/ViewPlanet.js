import React from "react";
import "./viewDetails.css";

export default ({id, name, population, rotation_period, diameter}) => {
    return (
        <>
            <img
                alt={"Planet"}
                className="person-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />

            <div className="card-body">

                <h4>{name}</h4>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">{"Population"}</span>

                        <span>{population}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">{"Diameter"}</span>

                        <span>{diameter}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">{"Rotation Period"}</span>

                        <span>{rotation_period}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}