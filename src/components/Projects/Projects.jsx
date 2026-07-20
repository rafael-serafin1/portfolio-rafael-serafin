import { projects } from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects section" id="projetos">
      <div className="projects__inner">
        <div className="section__head">
          <p className="section__eyebrow mono">projetos</p>
          <h2 className="projects__title">Cinco repositórios, cada um resolvendo um problema diferente.</h2>
          <p className="projects__lede">
            Da linguagem de terminal ao bot de Discord  o código real por trás de cada aba.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
