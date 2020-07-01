import React from "react";

export default () => {
    return (
        <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">{"Error messages!!!"}</h4>

            <p>{"Something has gone terrible wrong."}</p>

            <hr/>

            <p className="mb-0">{"But we already sent droids to fix it..."}</p>
        </div>
    );
}