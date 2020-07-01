import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {updateDataList} from "../services/helpers";

export default url => Component => {
    return (props) => {
        const [{itemList}, setList] = useState({ itemList: null });

        const {request} = useHttp();

        useEffect(() => {
            updateDataList("itemList", url, setList, request);
        }, [request])


        return (
            <Component {...props} itemList={itemList}/>
        )
    }
}
