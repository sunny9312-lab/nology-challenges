import style from "./ProjectCard.module.scss"

const ProjectCard = ({title, description, deployedLink, githubLink}) => {
  return (
    <article className={style.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Tech Stack</h3>
        <ul>
            <li>Tech 1</li>
            <li>Tech 2</li>
            <li>Tech 3</li>
        </ul>
        <div className={style.link_wrapper}>
            <a href={githubLink}>Github Link</a>
            <a href={deployedLink}>Deployed Link</a>
        </div>
    </article>
  )
}

export default ProjectCard