import ItemList from "../itemList/ItemList";
import { withData, withChildFunction } from "../../hoc-helpers";
import {PEOPLE, PLANET, STARSHIP, compose} from "../../services/helpers";

export const PlanetList = compose(
    withData(PLANET),
    withChildFunction(({name, diameter}) => `${name}  (Diameter: ${diameter})`)
)(ItemList);

export const PersonList = compose(
    withData(PEOPLE),
    withChildFunction(({name, gender}) => `${name}  (Gender: ${gender})`)
)(ItemList);

export const ShipList = compose(
    withData(STARSHIP),
    withChildFunction(({name, model}) => `${name}  (Model: ${model})`)
)(ItemList);
