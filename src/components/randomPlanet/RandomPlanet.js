import React, {useEffect, useState} from "react";
import "./RandomPlanet.css";
import {useHttp} from "../../hooks/http.hook";
import {PLANET, updateDataList} from "../../services/helpers";
import noImg from "../../assets/no-img.png";
import Preloader from "../preloader/Preloader";
import ErrorMessage from "../errorMessage";

export default () => {
    const [{planet}, setState] = useState({ planet: {} });

    const{request, loading, error} = useHttp();

    useEffect(() => {
        const interval = setInterval(
            () => updateDataList("planet", PLANET, setState, request, Math.floor(Math.random() * 25 +2)),
            7000
        );

        return () => clearInterval(interval);
    }, [request] )

    return (
        <div className="random-planet jumbotron rounded">
            {error ? <ErrorMessage/> : loading ? <Preloader/> : <PlanetView {...planet }/>}
        </div>
    )
}

const PlanetView = ({ id, name, population, rotation_period, diameter }) => {
    return (
        <>
            <img
                alt={"Planet"}
                className="planet-image"
                src={id ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : noImg}
            />

            <div>
                <h4>{name}</h4>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>

                        <span>{population}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>

                        <span>{rotation_period}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Diameter</span>

                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>

        </>

    );
}
