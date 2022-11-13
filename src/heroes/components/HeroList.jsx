import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() =>  getHeroesByPublisher( publisher ), [ publisher ] );

    return (
        <>
            <h1> Hero list - { publisher } </h1>

            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map( hero => (
                        <HeroCard 
                            key = { hero.id }
                            { ...hero }
                        />
                        
                    ))
                }
            </div>
        </>
    )
}