import style from "./ProjectCardList.module.scss"
import ProjectCard from '../ProjectCard/ProjectCard'
// import {projects} from "./data" data화일 위치를 app.js위치로 바꾸고, projectcardlist의 parameter 변수를 바꿀수도 있다. ver2라고, prefix붙혔다

const ProjectCardList = ({projects}) => {    
  return (
    <section className={style.list}>
        {projects.map((project, index) => (    //index값을 넣지 않으면 warning이 console에서 나온다. 
        <ProjectCard
            key={index}    //그래서 여기에도  index를 키값이랑 같다고 했다. react
            project={project}
        />
        ))}
    </section>
  )
}


export default ProjectCardList