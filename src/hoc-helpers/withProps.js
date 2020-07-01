import React from "react";

export default (Wrapped, dataUrl, Component) => {
    return (props) => {
        return (
            <Wrapped
                {...props}
                dataUrl={dataUrl}
                Component={Component}
            />
        )
    }
}