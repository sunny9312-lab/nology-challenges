import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
// import { projects } from "./data";  
import projects from './data.json'  //JSON화일로 데이타 타입변경후

function App() {
 
  return (
    <>
      <ProjectCardList projects={projects}/>
    </>
  );
}

export default App;
