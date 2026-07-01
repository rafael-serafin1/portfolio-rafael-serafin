import { GithubIcon, LinkedinIcon, MailIcon } from '../Icons.jsx'
import './Contact.css'

const CHANNELS = [
  {
    label: 'email',
    value: 'engelrafael03@gmail.com',
    href: 'mailto:engelrafael03@gmail.com',
    Icon: MailIcon,
  },
  {
    label: 'linkedin',
    value: '/in/rafael-engel-serafin',
    href: 'https://www.linkedin.com/in/rafael-engel-serafin',
    Icon: LinkedinIcon,
  },
  {
    label: 'github',
    value: '@rafael-serafin1',
    href: 'https://github.com/rafael-serafin1',
    Icon: GithubIcon,
  },
]

export default function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="contact__inner">
        <div className="section__head">
          <p className="section__eyebrow mono">contato</p>
          <h2 className="contact__title">Bora conversar sobre o próximo projeto?</h2>
          <p className="contact__lede">
            Aberto a oportunidades de estágio e junior — em especial times que curtem
            construir ferramentas, não só usá-las.
          </p>
        </div>

        <div className="tw contact__window">
          <div className="tw__bar">
            <span className="tw__dots"><span /><span /><span /></span>
            <span className="tw__tab">contato.sh</span>
          </div>
          <div className="tw__body contact__body">
            <p className="contact__line mono">
              <span className="contact__prompt">rafael@dev:~$</span> contact --list
            </p>
            <ul className="contact__list">
              {CHANNELS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <Icon />
                    <span className="contact__label mono">{label}</span>
                    <span className="contact__value">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
