import { HeroList } from "../components";

export const DCPage = () => {

  const publisher = 'DC Comics';

  return (
    <>
      <h1>DCPage</h1>
      <hr />

      <HeroList publisher={ publisher } />
    </>

  )
}
