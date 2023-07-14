import { planets } from '../../data/planets'
import PlanetCard from '../PlanetCard/PlanetCard'

export const PlanetList = () => {
  return (
   <section>
    {planets
    .sort((a, b) => a.diameterInKm - b.diameterInKm)
    .map((planet, index) => (<PlanetCard key={index} planet={planet} />
    ))}
  </section>
  )
}

export default PlanetList
//마지막줄 주석처리? 