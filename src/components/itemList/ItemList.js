import React from "react";
import "./ItemList.css";
import Preloader from "../preloader";
import { useHistory } from "react-router-dom";

const ItemList = ({children, itemList}) => {
    const history = useHistory();

    const handleCLick = id => () => history.push(id);

    const renderItems = arr => arr.map(item => {
        const {id} = item;

        return (
            <li
                key={id}
                className={"list-group-item"}
                onClick={handleCLick(id)}
            >
                {children(item)}
            </li>

        );
    });

    if (!itemList) return <Preloader/>

    return (
        <ul className="item-list list-group ">
            {renderItems(itemList)}
        </ul>
    )
}

export default ItemList;

