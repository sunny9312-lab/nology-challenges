import projects from "../data/projects.json";

const getAllProjects = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(projects)
        }, 500)
    })

}