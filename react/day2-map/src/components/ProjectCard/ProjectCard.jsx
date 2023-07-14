import style from "./ProjectCard.module.scss"

const ProjectCard = ({project}) => {
  const {title, description, deployedLink, githubLink, techStack} = project  //destructure 한다

  


  //react기술이 있으면, 해당 카드만 그레이로 변하는것, array이용
  const cardClasses = [style.card]
  if(techStack.find(tech => tech === 'React')) {
    cardClasses.push(style.grey__background)
  }

//혹은 이런 옵션도 있다. 
//const containsReact = techStack.some((tech) => tech === 'React')
//return (
//<article
//   className={`${style.card} ${containsReact && style.grey__background}`}

  return (
    <article className={cardClasses.join(' ')}>
  {/* <article className={style.card}>       */}
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Tech Stack</h3>
        <ul>
            {techStack.map((item, index) => (
            <li key={index}>{item}</li>))}  
        </ul>
        <div className={style.link_wrapper}>
            <a href={githubLink}>Github Link</a>
            {deployedLink && <a href={deployedLink}>Deployed Link</a>}
            {/* deployedlink가 참이면 링크를 출력, 없으면 않보냄 */}
        </div>
    </article>
  )
}

export default ProjectCard