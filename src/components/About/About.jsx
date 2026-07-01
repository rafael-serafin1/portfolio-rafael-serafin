import './About.css'

const FACTS = [
  { label: 'foco', value: 'DSLs & sistemas de terminal' },
  { label: 'formação', value: 'programador universitário' },
  { label: 'linguagens', value: '6, de F# a Python' },
  { label: 'base', value: 'Brasil' },
]

export default function About() {
  return (
    <section className="about section" id="sobre">
      <div className="about__inner">
        <div className="about__text">
          <p className="section__eyebrow mono">sobre</p>
          <h2 className="about__title">
            Curiosidade técnica com queda para construir as próprias ferramentas.
          </h2>
          <p className="about__body">
            Comecei resolvendo problemas com o que já existia — e reparei que os problemas
            mais interessantes apareciam quando a ferramenta certa ainda não tinha sido escrita.
            Foi assim que nasceram o <strong>PTML</strong> e o <strong>Vectora</strong>: duas
            linguagens de domínio específico feitas para transformar interfaces verbosas em
            sintaxe declarativa.
          </p>
          <p className="about__body">
            Do outro lado, também gosto do trabalho de fundação: APIs REST em camadas,
            modelagem relacional e automações que rodam de verdade, todo dia, para pessoas
            reais. Hoje divido o tempo entre projetar linguagens e entregar sistemas que
            funcionam em produção.
          </p>
        </div>

        <dl className="about__facts">
          {FACTS.map((f) => (
            <div className="about__fact" key={f.label}>
              <dt className="mono">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
