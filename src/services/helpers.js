export const PLANET = "https://swapi.dev/api/planets/";
export const PEOPLE = "https://swapi.dev/api/people/";
export const STARSHIP = "https://swapi.dev/api/starships/";

export const transformPlanet = ({ name, population, diameter, rotation_period, url })=> ({
   name,
   population,
   diameter,
   rotation_period,
   id:  url.match(/\/([0-9]*)\/$/)[1]
});

export const transformStarship = ({
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    crew,
    url,
    passengers,
    cargoCapacity
}) => ({
   name,
   model,
   manufacturer,
   costInCredits,
   length,
   crew,
   passengers,
   cargoCapacity,
   id:  url.match(/\/([0-9]*)\/$/)[1]
});

export const transformPerson = ({
   name,
   gender,
   birth_year,
   eye_color,
   url
}) => ({
   name,
   gender,
   birth_year,
   eye_color,
   id: url.match(/\/([0-9]*)\/$/)[1]
});

export  const updateDataList = async (dataSource, url, setState, request, id="" ) => {
    if (id === "error") {
        return;
    }
    let transform = () => {};

    switch (url) {
        case PLANET:
            transform = transformPlanet;
            break;

        case STARSHIP:
            transform = transformStarship;
            break;

        case PEOPLE:
            transform = transformPerson;
            break;

        default: console.warn("Incorrect URL incoming in updateDataList in service/helpers.js!!!"); break;
    }

    try {
        const data = await request(url+ `${id}${id ? "/" : ""}`);

        setState({ [dataSource]: id ? transform(data) : data.results.map(item => transform(item)) });
    } catch(e) {
        console.warn("Drons ERROR: ", e.message);
    }
}

export const compose = (...funcs) => (component) =>
    funcs.reduceRight((res, func) => res = func(res), component);


