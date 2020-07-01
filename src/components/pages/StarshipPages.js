import React from "react";
import { ShipList } from "../sw-components";

export default () => {
    return (
        <>
            <div className="row mb2">
                <div className="col-md-6">
                    <ShipList />
                </div>
            </div>
        </>
    );
}