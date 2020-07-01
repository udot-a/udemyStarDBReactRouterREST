import {PEOPLE, PLANET, STARSHIP} from "../../services/helpers";
import ItemDetails from "../ItemDetails/ItemDetails";
import {withProps} from "../../hoc-helpers";
import {ViewPlanet, ViewPerson, ViewStarship} from "../viewDetails";

export const PlanetDetails = withProps(ItemDetails, PLANET, ViewPlanet);
export const PersonDetails = withProps(ItemDetails, PEOPLE, ViewPerson);
export const StarshipDetails = withProps(ItemDetails, STARSHIP, ViewStarship);
