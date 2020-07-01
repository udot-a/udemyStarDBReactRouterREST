import React from "react";
import {PersonList} from "../sw-components";

export default () => {
    return (
        <>
            <div className="row mb2">
                <div className="col-md-6">
                    <PersonList />
                </div>
            </div>
        </>
    );
}