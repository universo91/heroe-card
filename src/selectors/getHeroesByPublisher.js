import { heroes } from "../heroes/data/heroes";

//obtener heroes por editor
export const getHeroesByPublisher = ( publisher ) => {

    return heroes.filter( hero => hero.publisher === publisher );
}