import { useState } from 'react'
import './Hero.css'

const SOURCE = `<?ptml encoding="UTF-8"?>
<terminal x-align="center">
  <block title="rafael.serafin" border="rounded">
    <column>
      <text foreground="gold" font="bold">
        Rafael Engel Serafin
      </text>
      <text>desenvolvedor & language designer</text>
      <hr orientation="horizontal" />
      <row gap="2">
        <text foreground="lightblue">constrói</text>
        <text>DSLs, APIs e ferramentas de terminal</text>
      </row>
    </column>
  </block>
</terminal>`

export default function Hero() {
  const [view, setView] = useState('rendered')

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__intro">
          <p className="hero__eyebrow mono"> portfólio · 2026</p>
          <h1 className="hero__title">
            Escrevo interfaces
            <br />
            como quem escreve <span className="hero__accent">linguagens</span>.
          </h1>
          <p className="hero__lede">
            Desenvolvedor universitário focado em desenvolvimento fullstack,
            sistemas de terminal e APIs  do parser à produção.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projetos">
              ver projetos
            </a>
            <a className="btn btn--ghost" href="#contato">
              falar comigo
            </a>
          </div>
        </div>

        <div className="hero__panel">
          <div className="tw hero__window">
            <div className="tw__bar">
              <span className="tw__dots">
                <span /><span /><span />
              </span>
              <span className="tw__tab">hero.ptml</span>
              <div className="hero__toggle" role="tablist" aria-label="Alternar visualização">
                <button
                  role="tab"
                  aria-selected={view === 'rendered'}
                  className={view === 'rendered' ? 'is-active' : ''}
                  onClick={() => setView('rendered')}
                >
                  ptml run
                </button>
                <button
                  role="tab"
                  aria-selected={view === 'source'}
                  className={view === 'source' ? 'is-active' : ''}
                  onClick={() => setView('source')}
                >
                  cat
                </button>
              </div>
            </div>
            <br />
            <div className="tw__body hero__body">
              {view === 'source' ? (
                <pre className="hero__source mono" aria-label="Código-fonte em PTML">
                  <code>{SOURCE}</code>
                </pre>
              ) : (
                <div className="hero__rendered" aria-label="Saída renderizada">
                  <div className="hero__box">
                    <span className="hero__box-title">rafael.serafin</span>
                    <p className="hero__box-name mono">Rafael Engel Serafin</p>
                    <p className="hero__box-role">desenvolvedor de softwares &amp; language designer</p>
                    <div className="hero__rule" />
                    <p className="hero__box-line">
                      <span className="hero__tag-teal mono">constrói</span> DSLs, APIs e
                      ferramentas de terminal
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="hero__status mono">
              <span className="hero__dot" aria-hidden="true" />
              compilado em 9ms · 0 erros
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
