import { HeroList } from "../hero/HeroList"

export const MarvelScreen = () => {
  const publisher = 'Marvel Comics';
    return (
      <>
        <h1>MarvelScreen</h1>
        <HeroList publisher={ publisher } />
      </>
    )
  }