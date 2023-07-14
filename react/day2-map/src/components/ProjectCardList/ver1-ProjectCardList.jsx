import style from "./ProjectCardList.module.scss"
import ProjectCard from '../ProjectCard/ver1-ProjectCard'
import {projects} from "./ver1-data"

//이렇게 배열로 변수 선언해서 받을 수도 있다. 
//쎔은 이방법이 더 좋다고 함, jsx화일 건드리지 않고, 그냥 위에서 데이타만 더 넣을수 있으니까. 
const ProjectCardList = () => {    //const project이하의 데이타타입들을 data.js
//   const projects = [
//     {
//     title:"Portfolio1",
//     description:"A portfolio about me" ,
//     deployedLink:"https://netlify.com" ,
//     githubLink:"https://github.com",
//     },
//     {
//     title:"Portfolio2",
//     description:"A portfolio about me" ,
//     deployedLink:"https://netlify.com" ,
//     githubLink:"https://github.com",
//     },
//     {
//     title:"Portfolio3",
//     description:"A portfolio about me" ,
//     deployedLink:"https://netlify.com" ,
//     githubLink:"https://github.com",
//     },
//     {
//     title:"Portfolio4",
//     description:"A portfolio about me" ,
//     deployedLink:"https://netlify.com" ,
//     githubLink:"https://github.com",
//     },
//     {
//     title:"Portfolio5",
//     description:"A portfolio about me" ,
//     deployedLink:"https://netlify.com" ,
//     githubLink:"https://github.com",
//     },
//     {
//     title:"Portfolio6",
//     description:"A portfolio about me" ,
//     deployedLink:"https://netlify.com" ,
//     githubLink:"https://github.com",
//     },
//     {
//     title:"Minesweeper",
//     description:"A CLI version of minesweeper" ,
//     deployedLink:"https://netlify.com" ,
//     githubLink:"https://github.com",
//     },
//    ]
  return (
    <section className={style.list}>
        {projects.map((project, index) => (    //index값을 넣지 않으면 warning이 console에서 나온다. 
        <ProjectCard
            key={index}    //그래서 여기에도  index를 키값이랑 같다고 했다. react
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
        />
        ))}
    </section>
  )
}

//이런 방법도 있고, 방법1
// const ProjectCardList = () => {
//     return (
//       <section className={style.list}>
//           <ProjectCard
//            title="Portfolio"
//            description="A portfolio about me" 
//            deployedLink="https://netlify.com" 
//            githubLink="https://github.com" />
  
//           <ProjectCard
//            title="fakeOS"
//            description="replicate an operation system with javascript" 
//            deployedLink="https://netlify.com" 
//            githubLink="https://github.com" />
  
//            <ProjectCard
//            title="MORSE CODE"
//            description="A javascript based morse code translation app" 
//            deployedLink="https://netlify.com" 
//            githubLink="https://github.com" />
  
//            <ProjectCard
//            title="Google books"
//            description="A portfolio about me" 
//            deployedLink="https://netlify.com" 
//            githubLink="https://github.com" />
  
//            <ProjectCard
//            title="e-commerse"
//            description="A portfolio about me" 
//            deployedLink="https://netlify.com" 
//            githubLink="https://github.com" />
           
//            <ProjectCard
//            title="mine sweeper"
//            description="A portfolio about me" 
//            deployedLink="https://netlify.com" 
//            githubLink="https://github.com" />
          
  
//       </section>
      
//     )
//   }
//

export default ProjectCardList