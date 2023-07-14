import style from './PlanetCard.module.scss'


const PlanetCard = ({planet}) => {
    const {
      planetName, 
      diameterInKm, 
      distanceFromSun,
      numberOfMoons,
      lengthOfYear, 
      image,
    } = planet;

  const cardStyles = `${style.planet_card} ${numberOfMoons === 0 ? style.moonless : ''}`;

  return (
    <div className={cardStyles}>
        <h2>{planetName}</h2>
        <img src={image} alt={planetName}/>
        <p>Diameter: {diameterInKm}</p>
        <p>Distance from Sun: {distanceFromSun}km </p>
        {numberOfMoons > 0 && <p>Moons: {numberOfMoons}</p>}  
        <p>Length of year: {lengthOfYear}</p>
    </div>
  )
}

export default PlanetCard

