import React from 'react'

const ProjectCard = () => {
  return (
    <article>
        <h2>Title</h2>
        <p>Description</p>
        <h3>Tech Stack</h3>
        <ul>
            <li>Tech 1</li>
            <li>Tech 2</li>
            <li>Tech 3</li>
        </ul>
        <a href='https://github.com'>Github Link</a>
        <a href='https://netlify.com'>Deployed Link</a>
    </article>
  )
}

export default ProjectCard