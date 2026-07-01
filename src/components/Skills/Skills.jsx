import './Skills.css'

const GROUPS = [
  {
    title: 'linguagens',
    items: ['JavaScript / TypeScript', 'F#', 'Java', 'Python', 'C / C++', 'C# / .NET'],
  },
  {
    title: 'front-end',
    items: ['React', 'Vite', 'TailwindCSS', 'SCSS', 'HTML/CSS'],
  },
  {
    title: 'back-end & dados',
    items: ['Node.js', 'Express', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate'],
  },
  {
    title: 'linguagens & ferramentas próprias',
    items: ['design de softwares', 'APIs Restfuls', 'ANSI rendering', 'frameworks'],
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="stack">
      <div className="skills__inner">
        <div className="section__head">
          <p className="section__eyebrow mono">stack</p>
          <h2 className="skills__title">O que uso para transformar ideia em sistema.</h2>
        </div>

        <div className="skills__code mono">
          <span className="skills__kw">import</span> {'{ '}
          <span className="skills__val">FSharp, TypeScript, Java, Python, JavaScript, C, Cpp</span>
          {' }'} <span className="skills__kw">from</span> <span className="skills__str">'linguagens'</span>
        </div>

        <div className="skills__groups">
          {GROUPS.map((g) => (
            <div className="skills__group" key={g.title}>
              <h3 className="skills__group-title mono">{g.title}</h3>
              <ul className="skills__tags">
                {g.items.map((item) => (
                  <li key={item} className="skills__tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
