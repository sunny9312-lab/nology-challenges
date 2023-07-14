import style from "./Card.module.scss";

// const Card = ({ cohortName, startDate }) => {
// 아니면, 아예 디폴트값을 TBA라고 주고 시작한다. 
const Card = ({ cohortName, startDate = 'TBA' }) => {    
  return (
    <div className={style.card}>
        <h3>{cohortName}</h3>
        <p>Start: {startDate}</p>
        {/* <p>Start: {startDate ? startDate: "TBA" }</p> */}
        {/* startdate가 있으면, 날자를 적어주고, 없으면 'TBA'적어준다 */}
    </div>
  )
}

export default Card