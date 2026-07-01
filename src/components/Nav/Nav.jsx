import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#sobre', label: 'sobre' },
  { href: '#stack', label: 'stack' },
  { href: '#projetos', label: 'projetos' },
  { href: '#contato', label: 'contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand mono" href="#top">
          <span className="nav__prompt">rafael@dev</span>
          <span className="nav__cursor" aria-hidden="true">_</span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="nav__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
