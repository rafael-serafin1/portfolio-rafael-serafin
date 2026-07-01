import { GithubIcon, ArrowIcon } from '../Icons.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="tw project">
      <div className="tw__bar">
        <span className="tw__dots">
          <span /><span /><span />
        </span>
        <span className="tw__tab">{project.file} -- </span>
        <span className="tw__meta">{project.lang}</span>
      </div>

      <div className="tw__body project__body">
        <div className='project__code'>  
          <pre className="project__snippet mono" aria-hidden="true">
            <code>{project.snippet}</code>
          </pre>
        </div>

        <div className="project__content">
          <div className="project__heading">
            <h3 className="project__name">{project.name}</h3>
            <span className="project__status mono">{project.status}</span>
          </div>
          <p className="project__full mono">{project.full}</p>
          <p className="project__pitch">{project.pitch}</p>
          <p className="project__description">{project.description}</p>

          <ul className="project__highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="project__footer">
            <ul className="project__tags">
              {project.tags.map((t) => (
                <li className='project__item' key={t}>{t}</li>
              ))}
            </ul>
            <a
              className="project__link"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> repositório <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      <br />
    </article>
  )
}
