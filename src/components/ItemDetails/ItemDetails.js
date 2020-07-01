import React, {useEffect, useState} from "react";
import "./itemDetails.css"
import {useHttp} from "../../hooks/http.hook";
import ErrorMessage from "../errorMessage";
import Preloader from "../preloader/Preloader";
import {updateDataList} from "../../services/helpers";
import {useParams} from "react-router-dom";

export default ({ dataUrl, Component }) => {

    const { id } =  useParams();

    const [{item}, setItem] = useState({ item: null });

    const{request, loading, error} = useHttp();

    useEffect( () =>{
            updateDataList("item", dataUrl, setItem, request, id);
    }, [id, request, dataUrl]);

    if (!item) {
        return <span>{"Select item from a list!!!"}</span>
    }

    return (
        <div className="person-details card">
            {error
                ? <ErrorMessage/>
                : loading
                    ? <Preloader/>
                    : <Component {...item}/>
            }
        </div>
    )
}

