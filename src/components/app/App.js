import React, {useState} from "react";
import Header from "../header";
import RandomPlanet from "../randomPlanet";
import "./App.css"
import {LoginPage, SecretPage} from "../pages";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, ShipList, StarshipDetails} from "../sw-components";

export default () => {
    const [toggle, setToggle] = useState(true);
    const [isLoggedIn, setLog] = useState(false);

    const handleClick = () => setToggle(prev => !prev);

    const  onLogin = () => setLog(true);

    return (
        <BrowserRouter>
            <div className={"d-flex flex-column justify-content-between align-items-center"}>
                <Header />

                {toggle && <RandomPlanet/>}

                <button
                    className={"btn btn-warning btn-lg m-3"}
                    onClick={handleClick}
                >
                    {"Toggle random planet"}
                </button>

                <Route
                    exact
                    path={"/"}
                    render={() => (<h2>WELCOME TO STAR DB!!!</h2>)}
                />
                <Switch>
                    <Route
                        exact
                        path={"/people/"}
                        component={PersonList}
                    />

                    <Route
                        exact
                        path={"/planets/"}
                        component={PlanetList}
                    />

                    <Route
                        exact
                        path={"/starships/"}
                        component={ShipList}
                    />

                    <Route
                        path={"/starships/:id"}
                        component={StarshipDetails}
                    />

                    <Route
                        path={"/people/:id"}
                        component={PersonDetails}
                    />

                    <Route
                        path={"/planets/:id"}
                        component={PlanetDetails}
                    />

                    <Route
                        exact
                        path={"/login"}
                        render={() => (<LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin}/>)}
                    />

                    <Route
                        exact
                        path={"/secret"}
                        render={() => (<SecretPage isLoggedIn={isLoggedIn}/>)}
                    />

                    <Redirect to={"/"}/>
                    {/*<Route render={() => (<h2>Page not found!!!</h2>)}/>*/}
                </Switch>
            </div>
        </BrowserRouter>
    )
}
